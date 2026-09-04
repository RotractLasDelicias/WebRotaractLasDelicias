import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'Token no configurado' }, { status: 500 });
  }

  try {
    // Consulta a la Graph API de Instagram
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,like_count,comments_count,timestamp&access_token=${token}&limit=6`,
      { next: { revalidate: 3600 } } // Cache de 1 hora
    );

    const data = await res.json();

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    // Mapeo al formato esperado por el componente frontend
    const posts = data.data.map((item: any) => ({
      id: item.id,
      imageUrl: item.media_url,
      caption: item.caption || '',
      postUrl: item.permalink,
      likes: item.like_count || 0,
      comments: item.comments_count || 0,
    }));

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener datos' }, { status: 500 });
  }
}