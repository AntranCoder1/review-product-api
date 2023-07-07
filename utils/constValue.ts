import * as path from "path";

export const levelAccessName = {
  Level1: "Level 1",
  Level2: "Level 2",
  Level3: "Level 3",
  Level4: "Level 4",
  Level5: "Level 5",
  Level6: "Level 6",
  Level7: "Level 7",
  Level8: "Level 8",
  Level9: "Level 9",
  Level10: "Level 10",
};

export const fileFolder = {
  uploads: "uploads",
  tmp: "tmp",
  images: "images",
  subDomains: "subDomains",
  users: "users",
  posts: "posts",
  newCampaigns: "newCampaigns",
  autoProfitBoosts: "autoProfitBoosts",
  adsManagement: "asdsManagement",
};

export const fileSubDomainType = {
  logoUrl: "logoUrl",
  faviconUrl: "faviconUrl",
  authorImage: "authorImage",
  buyNowImage: "buyNowImage",
};

export const filePostType = {
  postThumbnail: "postThumbnail",
  buyNowImage: "buyNowImage",
  popupImage: "popupImage",
};

export const fileNewCampaignType = {
  pinterestPoster: "pinterestPoster",
  poster: "poster",
};

export const userFacebookTool = {
  FacebookPixel: "FacebookPixel",
  FacebookCommentsPlugin: "FacebookCommentsPlugin",
  FacebookChatWidget: "FacebookChatWidget",
};

export const permission = {
  only1SubDomain: "1 Sub domain",
  only1CustomDomain: "1 Custom Domain",
  promote10ProductsPerMonth: "Promote 10 products per month",
  SyndicateContentAcross50HighTrafficPlatforms:
    "Syndicate Content Across 50 High Traffic Platforms",
  UnlimitedUse: "Unlimited use",
  UnlimitedSubDomains: "Unlimited Sub domains",
  UnlimitedCustomDomain: "Unlimited Custom Domain",
  PromoteUnlimitedProductsPerMonth: "Promote unlimited products per month",
  AutomationIsTurnedON: "Automation is turned ON",
  DFYPackage: "DFY Package",
  MaximizeProfits: "Maximize Profits",
  LimitlessTraffic: "Limitless Traffic",
  AgencyLicense: "Agency License",
};
export const fileUserType = {};

export const fileAdsType = {
  image: "image",
};

export const getPath = (data: any) => {
  return path.join(__dirname, "..", ...data);
};

export let rawing2Slug = (raw: string) => {
  // Define special characters
  const nativeCharacters =
    "áäâàãåčçćďéěëèêẽĕȇğíìîïıňñóöòôõøðřŕšşťúůüùûýÿžþÞĐđßÆa·/_,:;";
  const replaceCharacters =
    "aaaaaacccdeeeeeeeegiiiiinnooooooorrsstuuuuuyyzbBDdBAa------";

  // Trim & LowerCase
  raw = raw.toLowerCase().replace(/^\s+|\s+$/g, "");

  // Replace the special characters
  for (let i = 0; i < raw.length; i++) {
    raw = raw.replace(
      new RegExp(nativeCharacters.charAt(i), "g"),
      replaceCharacters.charAt(i)
    );
  }

  raw = raw
    .replace(/[^a-z0-9 -]/g, "") // Remove invalid chars
    .replace(/\s+/g, "-") // Collapse whitespace and replace by -
    .replace(/-+/g, "-"); // Collapse dashes

  let smooth: any = raw;
  return `${smooth}-${new Date().getTime()}`;
};
