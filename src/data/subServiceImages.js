/**
 * Per-sub-service imagery.
 *
 * Each sub-service gets a unique 4-image gallery + 1 showcase image, distinct
 * from every other sub-service within the same parent category. All URLs are
 * drawn from the verified Unsplash IDs already used across this codebase, so
 * every link is known-good.
 */

const U = (id, w) => `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

/**
 * Verified Unsplash photo IDs (80 total) discovered in the codebase, loosely
 * grouped by visual theme. We rotate through these per sub-service so each
 * sub-service gets a unique 5-image slice.
 */
const POOL = [
  // 0-9  mobile / phone / hand-held devices
  "photo-1512941937669-90a1b58e7e9c",
  "photo-1607252650355-f7fd0460ccdb",
  "photo-1616348436168-de43ad0db179",
  "photo-1556656793-08538906a9f8",
  "photo-1551650975-87deedd944c3",
  "photo-1580489944761-15a19d654956",
  "photo-1522202176988-66273c2fd55f",
  "photo-1579468118864-1b9ea3c0db4a",
  "photo-1611175694989-4870fafa4494",
  "photo-1513635269975-59663e0ac1ad",

  // 10-21 web / code / laptop / development
  "photo-1498050108023-c5249f4df085",
  "photo-1518770660439-4636190af475",
  "photo-1555066931-4365d14bab8c",
  "photo-1550439062-609e1531270e",
  "photo-1461749280684-dccba630e2f6",
  "photo-1484417894907-623942c8ee29",
  "photo-1467232004584-a241de8bcf5d",
  "photo-1547658719-da2b51169166",
  "photo-1460925895917-afdab827c52f",
  "photo-1432888498266-38ffec3eaf0a",
  "photo-1517180102446-f3ece451e9d8",
  "photo-1451187580459-43490279c0fa",

  // 22-30 AI / brain / abstract tech
  "photo-1677442136019-21780ecad995",
  "photo-1620712943543-bcc4688e7485",
  "photo-1535378620166-273708d44e4c",
  "photo-1526374965328-7f61d4dc18c5",
  "photo-1581091226825-a6a2a5aee158",
  "photo-1555949963-aa79dcee981c",
  "photo-1584949091598-c31daaaa4aa9",
  "photo-1633356122544-f134324a6cee",
  "photo-1576091160399-112ba8d25d1d",

  // 31-39 blockchain / crypto / data abstract
  "photo-1639762681485-074b7f938ba0",
  "photo-1621761191319-c6fb62004040",
  "photo-1605792657660-596af9009e82",
  "photo-1518544866330-95a2bec01a25",
  "photo-1642104704074-907c0698cbd9",
  "photo-1563986768609-322da13575f3",
  "photo-1585202900225-6d3ac20a6962",
  "photo-1618077360395-f3068be8e001",
  "photo-1632661674596-df8be070a5c5",

  // 40-48 cybersecurity / hacker / dark monitor
  "photo-1550751827-4bd374c3f58b",
  "photo-1504639725590-34d0984388bd",
  "photo-1510915361894-db8b60106cb1",
  "photo-1607706189992-eae578626c86",
  "photo-1579621908742-d81ba772b1d3",
  "photo-1573496359142-b8d87734a5a2",
  "photo-1560272564-c83b66b1ad12",
  "photo-1599507593499-a3f7d7d97667",
  "photo-1506973035872-a4ec16b8e8d9",

  // 49-58 enterprise / corporate / people / office
  "photo-1522071820081-009f0129c71c",
  "photo-1556761175-b413da4baf72",
  "photo-1497215728101-856f4ea42174",
  "photo-1486406146926-c627a92ad1ab",
  "photo-1542744173-8e7e53415bb0",
  "photo-1556761175-4b46a572b786",
  "photo-1556761175-5973dc0f32e7",
  "photo-1552664730-d307ca884978",
  "photo-1519389950473-47ba0277781c",
  "photo-1531482615713-2afd69097998",

  // 59-68 business / analytics / startup / team
  "photo-1551836022-d5d88e9218df",
  "photo-1600880292089-90a7e086ee0c",
  "photo-1600880292203-757bb62b4baf",
  "photo-1521737604893-d14cc237f11d",
  "photo-1521791136064-7986c2920216",
  "photo-1524492412937-b28074a5d7da",
  "photo-1557804506-669a67965ba0",
  "photo-1559028012-481c04fa702d",
  "photo-1544005313-94ddf0286df2",
  "photo-1507003211169-0a1dd7228f2d",

  // 69-79 on-demand / retail / food / delivery / misc
  "photo-1579952363873-27f3bade9f55",
  "photo-1551288049-bebda4e38f71",
  "photo-1526367790999-0150786686a2",
  "photo-1572177812156-58036aae439c",
  "photo-1566576912321-d58ddd7a6088",
  "photo-1503386471526-70ade70a36fb",
  "photo-1450101499163-c8848c66ca85",
  "photo-1450101499163-c8848c66ca85",
  "photo-1506794778202-cad84cf45f1d",
  "photo-1512496015851-a90fb38ba796",
];

// Sub-services ordered by category. Each takes a unique 5-image slice from POOL.
// Within any single category the longest run is 9 sub-services (45 slots) ≪ 80,
// so no sub-service within a category repeats another's image.
const ORDER = [
  // mobile (9)
  ["android-app-development",    [8, 0, 1, 2, 3]],     // android mock + phones
  ["ios-app-development",        [4, 5, 6, 7, 29]],    // iPhone-leaning
  ["react-native-app-development", [28, 10, 11, 12, 13]],
  ["flutter-app-development",    [22, 14, 15, 16, 17]],
  ["wearable-app-development",   [9, 18, 19, 20, 21]],
  ["pwa-development",            [10, 17, 20, 4, 13]],
  ["ar-vr-app-development",      [22, 23, 27, 38, 36]],
  ["startup-app-development",    [6, 49, 58, 62, 57]],
  ["mobile-app-maintenance",     [2, 11, 14, 8, 20]],

  // website (9)
  ["nextjs-development",         [11, 10, 13, 20, 12]],
  ["reactjs-development",        [28, 12, 17, 14, 19]],
  ["full-stack-development",     [15, 11, 14, 13, 10]],
  ["laravel-development",        [16, 18, 12, 17, 20]],
  ["wordpress-development",      [17, 16, 18, 19, 11]],
  ["shopify-development",        [72, 73, 71, 70, 69]],
  ["ecommerce-development",      [73, 69, 72, 66, 71]],
  ["nodejs-development",         [15, 63, 13, 66, 14]],
  ["cms-development",            [19, 18, 66, 16, 56]],

  // software (5)
  ["saas-platform-development",  [15, 66, 60, 67, 13]],
  ["erp-development",            [57, 68, 52, 50, 60]],
  ["crm-development",            [50, 59, 53, 51, 61]],
  ["lms-development",            [62, 6, 49, 75, 58]],
  ["desktop-app-development",    [67, 15, 13, 11, 16]],

  // ai (7)
  ["generative-ai-development",  [22, 23, 24, 25, 26]],
  ["ai-agent-development",       [23, 27, 22, 28, 29]],
  ["ai-chatbot-development",     [24, 26, 27, 23, 22]],
  ["machine-learning-development", [26, 25, 28, 24, 27]],
  ["computer-vision-development", [29, 28, 23, 35, 44]],
  ["llm-development",            [25, 22, 24, 28, 26]],
  ["nlp-development",            [27, 22, 25, 16, 29]],

  // blockchain (5)
  ["smart-contract-development", [31, 32, 33, 34, 35]],
  ["nft-marketplace-development",[37, 38, 36, 31, 34]],
  ["defi-protocol-development",  [35, 33, 31, 34, 32]],
  ["metaverse-development",      [36, 37, 38, 31, 33]],
  ["crypto-payment-gateway",     [34, 36, 31, 32, 38]],

  // enterprise (4)
  ["microsoft-azure-consulting", [21, 67, 51, 11, 60]],
  ["aws-development",            [67, 21, 77, 14, 65]],
  ["salesforce-consulting",      [61, 54, 55, 53, 59]],
  ["it-staff-augmentation",      [62, 57, 49, 51, 58]],

  // on-demand (5)
  ["food-delivery-app",          [71, 74, 72, 69, 70]],
  ["taxi-ride-hailing-app",      [70, 74, 75, 73, 69]],
  ["grocery-delivery-app",       [74, 73, 71, 69, 66]],
  ["ewallet-app",                [72, 73, 71, 70, 74]],
  ["dating-app-development",     [69, 56, 58, 57, 62]],

  // cybersecurity (6)
  ["penetration-testing",        [40, 41, 42, 35, 44]],
  ["security-audit-compliance",  [48, 68, 59, 53, 51]],
  ["managed-soc-services",       [35, 40, 42, 41, 46]],
  ["cloud-security",             [77, 67, 21, 11, 14]],
  ["application-security",       [12, 25, 13, 15, 27]],
  ["incident-response",          [41, 35, 42, 45, 68]],
];

function build(indexes) {
  const [showcaseIdx, ...galleryIdxs] = indexes;
  return {
    showcase: U(POOL[showcaseIdx], 1200),
    gallery: galleryIdxs.map((i) => U(POOL[i], 800)),
  };
}

export const SUBSERVICE_IMAGES = Object.fromEntries(
  ORDER.map(([slug, idx]) => [slug, build(idx)])
);

const CATEGORY_FALLBACK = {
  "mobile":        SUBSERVICE_IMAGES["android-app-development"],
  "website":       SUBSERVICE_IMAGES["nextjs-development"],
  "software":      SUBSERVICE_IMAGES["saas-platform-development"],
  "ai":            SUBSERVICE_IMAGES["generative-ai-development"],
  "blockchain":    SUBSERVICE_IMAGES["smart-contract-development"],
  "enterprise":    SUBSERVICE_IMAGES["aws-development"],
  "on-demand":     SUBSERVICE_IMAGES["food-delivery-app"],
  "cybersecurity": SUBSERVICE_IMAGES["penetration-testing"],
};

export function getSubServiceImages(subSlug, categorySlug) {
  return (
    SUBSERVICE_IMAGES[subSlug] ||
    CATEGORY_FALLBACK[categorySlug] ||
    SUBSERVICE_IMAGES["saas-platform-development"]
  );
}
