function withValidProperties(
  properties: Record<string, undefined | string | string[]>,
) {
  return Object.fromEntries(
    Object.entries(properties).filter(([key, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return !!value;
    }),
  );
}

export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL;

  return Response.json({
   "accountAssociation": {
   "header": "eyJmaWQiOjExMjk2OTYsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgwRmU3OTk5M0FmQmRGQjZEMzQzM2MwNTdlZDc4RTE5NWVEMURkQjA4In0",
    "payload": "eyJkb21haW4iOiJmb21vZmlyZS52ZXJjZWwuYXBwIn0",
    "signature": "MHhiNDk1ZWMxNGM1NDQxYzhjMmJkNjRhNjQyY2QxZmM1MmY1YWEyZmQzMjIyYjE4N2EyZDg3OTViODg3ZTZmZmJjNjg0MDIzNzZlZTA3ZDk2MWMyNzgwYTI0ZTFkOTAzMzBiNmIxYmIxMGFlMDVhZjg2NmFlNDcwZDNiYzA0NTcyMTFi"
  },
    frame: withValidProperties({
      version: "next",
      name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
      subtitle: process.env.NEXT_PUBLIC_APP_SUBTITLE,
      description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
      screenshotUrls: [],
      iconUrl: process.env.NEXT_PUBLIC_APP_ICON,
      splashImageUrl: process.env.NEXT_PUBLIC_APP_SPLASH_IMAGE,
      splashBackgroundColor: process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR,
      homeUrl: URL,
      webhookUrl: `${URL}/api/webhook`,
      buttonTitle: `Play Game`,
      primaryCategory: process.env.NEXT_PUBLIC_APP_PRIMARY_CATEGORY,
      tags: [],
      heroImageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
      tagline: process.env.NEXT_PUBLIC_APP_TAGLINE,
      ogTitle: process.env.NEXT_PUBLIC_APP_OG_TITLE,
      ogDescription: process.env.NEXT_PUBLIC_APP_OG_DESCRIPTION,
      ogImageUrl: process.env.NEXT_PUBLIC_APP_OG_IMAGE,
    }),
  });
}
