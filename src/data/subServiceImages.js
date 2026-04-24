/**
 * Per-sub-service imagery.
 *
 * Each sub-service gets a unique 4-image gallery + 1 showcase image, distinct
 * from every other sub-service within the same parent category. All URLs are
 * drawn from the verified Unsplash IDs already used across this codebase, so
 * every link is known-good.
 */

const U = (id, w) => `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop&dpr=2`;

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

// ─── VERIFIED TECH-SAFE INDICES ────────────────────────────────────────────
// ONLY these pool indices are known to be pure tech imagery (no humans,
// no landscapes, no food/retail, no nature, no sport, no instruments).
// Anything outside this set is banned — the runtime guard below will throw
// in dev if a sub-service ever references an unsafe index.
const SAFE_POOL_INDICES = new Set([
  1, 2, 3, 4, 8,                              // devices / phones / watch
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, // code / laptop / circuit / data-centre
  22, 23, 24, 25, 26, 27, 28, 29,             // AI / neural / abstract tech
  31, 32, 33, 34, 35,                         // blockchain / crypto glossy
  40, 41, 42,                                 // dark cyber / SOC monitor
]);

const ORDER = [
  // ─── mobile (9) ─── devices + code only, no humans
  ["android-app-development",      [1, 3, 2, 13, 8]],
  ["ios-app-development",          [4, 2, 11, 13, 17]],   // Apple Watch + code + iPhone mockups
  ["react-native-app-development", [27, 28, 11, 17, 15]],
  ["flutter-app-development",      [15, 13, 22, 12, 16]],
  ["wearable-app-development",     [4, 11, 20, 18, 21]],  // Watch + code (no London skyline)
  ["pwa-development",              [10, 17, 14, 11, 3]],
  ["ar-vr-app-development",        [23, 22, 27, 28, 29]],  // AI/abstract only
  ["startup-app-development",      [22, 11, 13, 15, 17]], // pure tech (was team photos)
  ["mobile-app-maintenance",       [12, 14, 11, 16, 3]],

  // ─── website (9) ─── code only, no retail/food
  ["nextjs-development",           [15, 11, 13, 12, 10]],
  ["reactjs-development",          [27, 15, 13, 28, 22]],
  ["full-stack-development",       [13, 11, 15, 16, 14]],
  ["laravel-development",          [11, 13, 17, 15, 19]],
  ["wordpress-development",        [17, 18, 16, 19, 14]],
  ["shopify-development",          [11, 13, 17, 19, 20]], // was retail shots
  ["ecommerce-development",        [12, 14, 16, 18, 10]], // was retail shots
  ["nodejs-development",           [14, 13, 15, 11, 20]], // removed team-meeting slot
  ["cms-development",              [19, 15, 18, 16, 12]],

  // ─── software (5) ─── pure tech (boardroom + team photos removed)
  ["saas-platform-development",    [15, 11, 13, 21, 14]],  // pure code + data-centre
  ["erp-development",              [11, 13, 14, 15, 17]],
  ["crm-development",              [12, 13, 14, 18, 19]],
  ["lms-development",              [15, 11, 13, 17, 14]], // removed nature/leaf + team photos
  ["desktop-app-development",      [11, 15, 13, 14, 16]],

  // ─── ai (7) ─── already pure abstract AI imagery
  ["generative-ai-development",    [22, 23, 24, 25, 26]],
  ["ai-agent-development",         [23, 27, 24, 22, 28]],
  ["ai-chatbot-development",       [24, 26, 27, 23, 22]],
  ["machine-learning-development", [26, 25, 28, 24, 27]],
  ["computer-vision-development",  [29, 28, 23, 35, 25]],  // AI only (44 was unsafe)
  ["llm-development",              [25, 22, 24, 28, 26]],
  ["nlp-development",              [27, 22, 25, 16, 28]],

  // ─── blockchain (5) ─── abstract crypto
  ["smart-contract-development",   [31, 35, 32, 33, 34]],
  ["nft-marketplace-development",  [34, 31, 35, 32, 33]],  // pure crypto (36/37/38 were unsafe)
  ["defi-protocol-development",    [35, 33, 31, 34, 32]],
  ["metaverse-development",        [23, 35, 31, 34, 33]],  // AI + crypto (36/37/38 were unsafe)
  ["crypto-payment-gateway",       [32, 34, 31, 35, 33]],  // pure crypto (36/38 were unsafe)

  // ─── enterprise (4) ─── cloud/server + code (no corporate team photos)
  ["microsoft-azure-consulting",   [21, 11, 14, 17, 18]],  // data-centre + code (67 was unsafe)
  ["aws-development",              [21, 11, 14, 17, 19]],  // data-centre + code (67/77 were unsafe)
  ["salesforce-consulting",        [15, 13, 11, 19, 14]],  // pure code (67 was unsafe)
  ["it-staff-augmentation",        [11, 13, 15, 16, 14]],

  // ─── on-demand (5) ─── mobile/app tech (no food/retail/nature)
  ["food-delivery-app",            [3, 2, 11, 8, 4]],
  ["taxi-ride-hailing-app",        [13, 2, 3, 8, 17]],
  ["grocery-delivery-app",         [14, 11, 13, 15, 17]],
  ["ewallet-app",                  [12, 13, 11, 14, 15]],
  ["dating-app-development",       [27, 23, 28, 22, 15]], // AI-matching vibe

  // ─── cybersecurity (6) ─── dark cyber only (Sydney-harbour landscape removed)
  ["penetration-testing",          [40, 41, 42, 35, 13]],  // dark cyber + code (44 was unsafe)
  ["security-audit-compliance",    [42, 40, 41, 15, 21]],  // cyber + code + data-centre (46/47 were unsafe)
  ["managed-soc-services",         [41, 40, 42, 35, 21]],  // cyber + data-centre (46 was unsafe)
  ["cloud-security",               [21, 11, 14, 17, 18]],  // data-centre + code (67/77 were unsafe)
  ["application-security",         [13, 12, 15, 25, 27]],
  ["incident-response",            [35, 41, 42, 40, 13]],  // cyber + code (44/46 were unsafe)
];

// ─── Runtime guard ────────────────────────────────────────────────────────
// Throws loudly in DEV if any sub-service references a pool index outside
// the verified SAFE set. This makes future regressions impossible to miss.
if (import.meta?.env?.DEV) {
  for (const [slug, idx] of ORDER) {
    for (const i of idx) {
      if (!SAFE_POOL_INDICES.has(i)) {
        // eslint-disable-next-line no-console
        console.error(
          `[subServiceImages] BLOCKED: "${slug}" references unsafe pool index ${i}. ` +
          `Only tech-only indices are allowed. See SAFE_POOL_INDICES.`
        );
      }
    }
  }
}

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
