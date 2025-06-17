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
    "header": "eyJmaWQiOjUxMzE5NCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDBhYTYzY2Q5ODA4OGQzQTcyNzA0MjM1ZDVCYjgxZjZjOTE5MzM2NTMifQ",
    "payload": "eyJkb21haW4iOiJhbmltZS1tYW5nYS1wbHVzLnZlcmNlbC5hcHAifQ",
    "signature": "MHg2MDFkNzcwYmIxOWI2MzgxNWZiMWNlYWQzYmMwZTNjOWY2ZDNmYjNjODBiMmIwOGEyZGU2ZDQ0MmJiOTM4NWY1MzRjNDlhNDQyYTIwOTE3MzA1ZDM3Nzk2MDQ2ZGZiOTIwYTFjMWQwOWZmZWZkODNkNTAyMGU5NTkzMDcxYmZiYjFi"
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
      buttonTitle: `Read Chapter`,
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
