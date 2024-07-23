import { locales } from "@/lib/i18n";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/forum(.*)",
  "/workbench(.*)",
]);

const isApiRoute = createRouteMatcher(["/api(.*)"]);

const PUBLIC_FILE = /\.(.*)$/;

const notNeedI18NRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

const needI18NRouteRedirect = createRouteMatcher([
  "/((?!api|_next/static|_next/image|.*\\.(?:ico|png|jpg|jpeg|svg|gif|webp|js|css|woff|woff2|ttf|eot)).*)",
]);

// 如果路径不匹配，内部重定向到 404 页面
const matchedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/forum(.*)",
  "/workbench(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/_next(.*)",
  "/api(.*)",
  "/((?!.*\\.(?:ico|png|svg|jpg|jpeg|xml|txt)$).*)",
]);

export default clerkMiddleware((auth, req) => {
  console.log("req.url: ", req.url);

  // auth
  if (isProtectedRoute(req)) {
    console.log("auth protect!!!");
    auth().protect();
  }
  if (isApiRoute(req)) {
    const authObject = auth();
    if (!authObject.userId) {
      return new NextResponse("Unauthorized, please sign in.", { status: 401 });
    }
  }
  console.log("auth pass!!");

  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    console.log("return!");
    return;
  }
  console.log("needI18NRouteRedirect pass!!");

  const { pathname } = req.nextUrl;
  const defaultLocale = "en"; // 这里可以根据需要设置默认的 locale

  // 检查路径是否包含 locale 前缀
  const locale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 如果路径是 `/en/{任意page}`，则重定向到 `/{任意page}`
  if (pathname.startsWith(`/${defaultLocale}/`)) {
    const newPathname = pathname.replace(`/${defaultLocale}/`, "/");
    return NextResponse.redirect(new URL(newPathname, req.url));
  }

  // 如果路径不包含 locale 前缀，则内部重定向到 `/en/{非locale page}`
  if (!locale) {
    console.log("does not contain locale, rewrite to /en: ", pathname);
    req.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.rewrite(req.nextUrl);
  }

  // 其他逻辑：根路径重定向等
  if (pathname === "/") {
    req.nextUrl.pathname = `/${defaultLocale}`;
    return NextResponse.rewrite(req.nextUrl);
  }

  if (locale === defaultLocale && needI18NRouteRedirect(req)) {
    req.nextUrl.pathname = `/${locale}${req.nextUrl.pathname}`;
    return NextResponse.rewrite(req.nextUrl);
  }

  if (!matchedRoute(req)) {
    req.nextUrl.pathname = "/404";
    return NextResponse.rewrite(req.nextUrl);
  }
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:ico|png|jpg|jpeg|svg|gif|webp|js|css|woff|woff2|ttf|eot)).*)",
  ],
};

