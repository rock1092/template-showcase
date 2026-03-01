import { NicheSlug } from "@/types/template";
import { getNicheVisual } from "@/data/niche-visuals";

interface PixabayHit {
  largeImageURL?: string;
  webformatURL: string;
  tags: string;
  user: string;
}

interface PixabayResponse {
  hits: PixabayHit[];
}

export interface WorkPhoto {
  url: string;
  alt: string;
  credit: string;
}

function getFallbackPhotos(slug: NicheSlug): WorkPhoto[] {
  return Array.from({ length: 6 }).map((_, index) => ({
    url: `https://picsum.photos/seed/${slug}-${index + 1}/1200/800`,
    alt: `${slug} work sample ${index + 1}`,
    credit: "Picsum",
  }));
}

export async function getWorkPhotos(slug: NicheSlug): Promise<WorkPhoto[]> {
  const apiKey = process.env.PIXABAY_API_KEY;

  if (!apiKey) {
    return getFallbackPhotos(slug);
  }

  const visual = getNicheVisual(slug);
  const params = new URLSearchParams({
    key: apiKey,
    q: visual.pixabayQuery,
    image_type: "photo",
    orientation: "horizontal",
    per_page: "12",
    safesearch: "true",
  });

  try {
    const response = await fetch(`https://pixabay.com/api/?${params.toString()}`, {
      next: { revalidate: 60 * 60 * 12 },
    });

    if (!response.ok) {
      return getFallbackPhotos(slug);
    }

    const data = (await response.json()) as PixabayResponse;
    const photos = data.hits.slice(0, 6).map((hit) => ({
      url: hit.largeImageURL || hit.webformatURL,
      alt: hit.tags,
      credit: `Pixabay / ${hit.user}`,
    }));

    return photos.length >= 4 ? photos : getFallbackPhotos(slug);
  } catch {
    return getFallbackPhotos(slug);
  }
}
