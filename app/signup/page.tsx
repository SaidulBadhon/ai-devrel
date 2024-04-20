import Link from "next/link";
import { stringify } from "querystring";

export default function Page() {
  const queryParams = {
    client_id: process.env.GITHUB_CLIENT_ID,
    redirect_uri: `${process.env.GITHUB_REDIRECT_URL}`,
    scope: "user:email,repo,admin:org",
    // scope: "user:email,repo,read:org",
  };
  const githubQueryUrl = `https://github.com/login/oauth/authorize?${stringify(
    queryParams,
  )}`;

  return (
    <div
      className="container relative mx-auto flex h-full min-h-[100vh] w-full flex-col items-center justify-center gap-4 px-4 py-8"
      style={{
        minHeight: "max(calc(100vh - 4rem), 800px)",
      }}
    >
      <a
        href={githubQueryUrl}
        className="mt-4 flex items-center justify-center gap-4
         rounded-md border border-cyan-900/50 bg-cyan-600/5 px-8 py-1 
         
         transition-all 
         hover:bg-cyan-600/50 hover:text-white 
         active:bg-cyan-600 active:text-white
         "
      >
        <GitHubIcon />
        Signup with GitHub
      </a>

      <p children="or" className="text-sm text-gray-500" />

      <p className="text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="text-cyan-600">
          Log in
        </Link>
      </p>

      <p className="absolute bottom-4 mt-8 text-sm text-gray-500">
        By logging in, you agree to our{" "}
        <a
          href="https://jutsu.ai/terms-and-conditions"
          className="text-cyan-600"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="https://jutsu.ai/privacy-policy" className="text-cyan-600">
          Privacy Policy
        </a>{" "}
      </p>
    </div>
  );
}

const GitHubIcon = () => (
  <svg
    width="40"
    height="42"
    viewBox="0 0 116 115"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="58" cy="57.5" rx="58" ry="57.5" fill="#FFFFFF" />
    <g
      // clip-path="url(#clip0_849_6)"
      clipPath="url(#clip0_849_6)"
    >
      <path
        // fill-rule="evenodd"
        fillRule="evenodd"
        // clip-rule="evenodd"
        clipRule="evenodd"
        d="M57.854 8C30.839 8 9 30 9 57.217C9 78.973 22.993 97.389 42.405 103.907C44.832 104.397 45.721 102.848 45.721 101.545C45.721 100.404 45.641 96.493 45.641 92.418C32.051 95.352 29.221 86.551 29.221 86.551C27.037 80.847 23.801 79.381 23.801 79.381C19.353 76.366 24.125 76.366 24.125 76.366C29.059 76.692 31.648 81.418 31.648 81.418C36.015 88.914 43.052 86.796 45.883 85.492C46.287 82.314 47.582 80.114 48.957 78.892C38.118 77.751 26.714 73.514 26.714 54.609C26.714 49.231 28.654 44.831 31.728 41.409C31.243 40.187 29.544 35.134 32.214 28.371C32.214 28.371 36.339 27.067 45.64 33.423C49.6221 32.3457 53.7288 31.7976 57.854 31.793C61.979 31.793 66.184 32.364 70.067 33.423C79.369 27.067 83.494 28.371 83.494 28.371C86.164 35.134 84.464 40.187 83.979 41.409C87.134 44.831 88.994 49.231 88.994 54.609C88.994 73.514 77.59 77.669 66.67 78.892C68.45 80.44 69.986 83.373 69.986 88.018C69.986 94.618 69.906 99.915 69.906 101.544C69.906 102.848 70.796 104.397 73.222 103.908C92.634 97.388 106.627 78.973 106.627 57.217C106.707 30 84.788 8 57.854 8Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_849_6">
        <rect width="98" height="96" fill="white" transform="translate(9 8)" />
      </clipPath>
    </defs>
  </svg>
);
