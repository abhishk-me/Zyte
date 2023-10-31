
export const arrayEquals = (a: number[], b: number[]) => {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}


export const getUrl = (pageId: string) => {
  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:4444/pages/${pageId}`
  }

  return `https://fibr-landing-page.vercel.app/pages/${pageId}`;
}