import gsap from "gsap";


// Animate page-in (transition effect when page loads)
export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      yPercent: 0,
      zIndex: 999999,
    })
      .to(transitionElement, {
        yPercent: -100,
        duration: .8,
        ease: "power2.in"
      })
      .to(
        transitionElement,
        {
          duration: 1,
        },
        "<"
      );
  }
};

// Utility function to format the page name
const formatPageName = (href) => {
  if (!href || href === "/") {
    // Handle the home page specifically
    return `<svg viewBox="0 0 462 224"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.79 9.04999V93H0V9.04999H16.79Z" fill="white"></path>
          <path d="M95.19 59.64V93H78.32V60.67C78.32 50.62 73.3 45.34 64.41 45.34C59.77 45.34 54.62 48.05 50.24 53.2V93H33.37V31.56H50.24V36.2C55.26 32.21 61.06 30.02 68.02 30.02C84.38 30.02 95.2 41.61 95.2 59.65L95.19 59.64Z" fill="white"></path>
          <path d="M154.4 90.07C148.91 92.19 144.41 92.69 140.04 92.69C124.06 92.69 115.07 82.7 115.07 67.47V45.37H102.34V31.64H115.07V11.04H131.42V31.64H153.27V45.37H131.42V67.47C131.42 74.46 135.79 77.58 141.91 77.58C145.66 77.58 149.15 76.46 152.15 75.21L154.4 90.07Z" fill="white"></path>
          <path d="M221.3 66.34H177.3C178.56 73.26 183.08 78.54 192.51 78.54C196.91 78.54 199.93 77.79 202.06 75.15H220.29C216.27 86.47 205.58 93 192.38 93C173.14 93 160.45 79.42 160.45 61.57C160.45 43.72 173.02 30.01 191.38 30.01C212 30.01 224.45 45.6 221.3 66.34ZM177.67 55.16H204.95C204.07 47.49 199.17 43.97 191.5 43.97C183.45 43.97 179.18 48.87 177.67 55.16Z" fill="white"></path>
          <path d="M291.97 31.51V91.36C291.97 109.94 279.25 121.16 261.55 121.16C243.85 121.16 231.75 110.56 230.5 95.6H247.08C247.83 101.96 253.06 106.32 261.54 106.32C269.52 106.32 275.63 101.08 275.63 91.36V83.75C271.02 86.74 265.16 88.49 258.55 88.49C242.09 88.49 228.87 75.15 228.87 59.81C228.87 41.98 242.09 30.01 258.55 30.01C265.16 30.01 271.02 31.76 275.63 34.75V31.51H291.96H291.97ZM275.64 66.92V51.58C271.77 45.97 266.41 44.1 261.05 44.1C251.7 44.1 245.21 50.33 245.21 59.81C245.21 66.79 251.69 74.4 261.05 74.4C266.41 74.4 271.77 72.53 275.64 66.92Z" fill="white"></path>
          <path d="M347.22 30.01V46.11C337.61 46.63 330.6 49.49 325.27 55.46V92.99H308.26V31.55H325.27V38.19C330.86 32.86 338 30.01 347.22 30.01Z" fill="white"></path>
          <path d="M417.07 31.52V91.49H400.6V88.1C395.95 91.12 390.04 93 383.38 93C366.78 93 353.46 78.92 353.46 61.57C353.46 44.22 366.79 30.01 383.38 30.01C390.04 30.01 395.95 31.9 400.6 34.91V31.52H417.07ZM400.6 71V52.02C396.7 46.49 391.3 44.98 385.89 44.98C376.46 44.98 369.92 52.52 369.92 61.58C369.92 70.64 376.46 78.05 385.89 78.05C391.3 78.05 396.7 76.54 400.6 71.01V71Z" fill="white"></path>
          <path d="M87.4 194.95H70.61V148.04L48.76 182.61H38.64V182.49L16.54 147.55L16.79 194.96H0V111.01H11.85L43.7 161.87L75.55 111.01H87.4V194.96V194.95Z" fill="white"></path>
          <path d="M164.64 133.55V193.44H148.19V190.05C143.54 193.06 137.64 194.95 130.99 194.95C114.42 194.95 101.11 180.89 101.11 163.56C101.11 146.23 114.42 132.05 130.99 132.05C137.64 132.05 143.54 133.93 148.19 136.95V133.56H164.64V133.55ZM148.19 172.97V154.01C144.3 148.49 138.9 146.98 133.5 146.98C124.08 146.98 117.55 154.51 117.55 163.55C117.55 172.59 124.08 180 133.5 180C138.9 180 144.3 178.49 148.19 172.97Z" fill="white"></path>
          <path d="M241.38 133.54V193.33C241.38 211.89 228.67 223.1 210.99 223.1C193.31 223.1 181.22 212.51 179.97 197.56H196.54C197.29 203.91 202.52 208.27 210.99 208.27C218.96 208.27 225.07 203.04 225.07 193.32V185.72C220.46 188.71 214.61 190.45 208 190.45C191.56 190.45 178.35 177.12 178.35 161.8C178.35 143.99 191.55 132.03 208 132.03C214.6 132.03 220.46 133.77 225.07 136.76V133.52H241.39L241.38 133.54ZM225.06 168.92V153.6C221.2 147.99 215.84 146.13 210.48 146.13C201.14 146.13 194.66 152.36 194.66 161.83C194.66 168.81 201.14 176.4 210.48 176.4C215.84 176.4 221.19 174.53 225.06 168.93V168.92Z" fill="white"></path>
          <path d="M319.69 161.63V194.95H302.84V162.66C302.84 152.63 297.82 147.35 288.95 147.35C284.32 147.35 279.17 150.05 274.8 155.2V194.95H257.95V133.59H274.8V138.22C279.82 134.23 285.61 132.05 292.55 132.05C308.89 132.05 319.69 143.63 319.69 161.64V161.63Z" fill="white"></path>
          <path d="M395.19 133.55V193.44H378.74V190.05C374.09 193.06 368.19 194.95 361.54 194.95C344.97 194.95 331.66 180.89 331.66 163.56C331.66 146.23 344.97 132.05 361.54 132.05C368.19 132.05 374.09 133.93 378.74 136.95V133.56H395.19V133.55ZM378.74 172.97V154.01C374.85 148.49 369.45 146.98 364.05 146.98C354.63 146.98 348.1 154.51 348.1 163.55C348.1 172.59 354.63 180 364.05 180C369.45 180 374.85 178.49 378.74 172.97Z" fill="white"></path>
          <path d="M436.24 3.22H428.41V22.09H424.94V3.22H417.11V0H436.24V3.22Z" fill="white"></path>
          <path d="M461.74 22.08H458.27V7.69L451.71 18.34H449.53L442.91 7.59L442.97 22.07H439.46V0H441.99L450.59 14.03L459.2 0H461.73V22.08H461.74Z" fill="white"></path>
        </svg>`;
  }

  // Remove leading slash and split by "/"
  const parts = href.replace(/^\//, "").split("/");

  // Get the last part (for internal paths, only show the last segment)
  const pageName = parts[parts.length - 1];

  // Replace hyphens with spaces and capitalize each word
  const formattedName = pageName
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word

  // Insert <br /> if there are two words
  const words = formattedName.split(" ");
  if (words.length === 2) {
    return `${words[0]}<br /> ${words[1]}`;
  }

  return formattedName;
};


// Animate page-out (transition effect when page changes)
export const animatePageOut = (href, router) => {
  const animationWrapper = document.getElementById("transition-element");
  const transitionPageName = document.getElementById("transitionPageName");


  if (transitionPageName) {
    const formattedName = formatPageName(href);
    transitionPageName.innerHTML = formattedName; // Safely update the page name
    transitionPageName.style.textAlign = "right"; // Ensure right alignment dynamically
    transitionPageName.style.fontSize = "var(--fs-64);"

  }

  if (animationWrapper && router) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      yPercent: 100,
    })
      .to(animationWrapper, {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          if (router && href) {
            router.push(href); // Ensure router is defined and href is provided
          } else {
            console.error("Router or href is undefined");
          }
        },
      })
      .to(
        animationWrapper,
        {
          duration: 0.4,
        },
        "<"
      );
  } else {
    // console.error("Animation wrapper or router is not available");
  }
};
