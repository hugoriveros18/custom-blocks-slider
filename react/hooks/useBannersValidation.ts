import { useEffect, useState } from "react";

export default function useBannersValidation({banners}:useBannersValidationProps) {

  //STATES
  const [activeBanners, setActiveBanners] = useState<Banner[]>([]);

  //EFFECTS
  useEffect(() => {
    const validBanners = banners.filter(banner => banner.isActive);

    setActiveBanners(validBanners);
  }, [banners])

  //RETURN
  return activeBanners;
}

