// Asset utility for handling both bundled and public assets
export const getAssetUrl = (path: string): string => {
  // For production builds, handle base path properly
  const base = import.meta.env.BASE_URL || '/';
  
  if (path.startsWith('/')) {
    // Public folder assets
    return base === '/' ? path : `${base.replace(/\/$/, '')}${path}`;
  }
  
  // Bundled assets (should be imported directly)
  return path;
};

export const logAssetError = (assetPath: string, error: Event | string) => {
  console.warn(`Asset loading failed: ${assetPath}`, error);
};

export const createImageErrorHandler = (fallbackSrc: string, assetName: string) => {
  return (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    logAssetError(target.src, `Failed to load ${assetName}`);
    target.src = fallbackSrc;
    target.alt = `${assetName} - Image not available`;
  };
};