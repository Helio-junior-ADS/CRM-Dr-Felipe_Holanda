import clsx from "clsx";
import * as React from "react";
import type { SVGProps } from "react";

const SvgKinde = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={21}
    viewBox="0 0 86 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={clsx("text-[#081026] dark:text-white", props.className)}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.472 27.722c-1.742 0-3.324.011-4.905-.016-.18-.003-.392-.193-.527-.349-3.457-4.01-6.906-8.026-10.356-12.04-.112-.13-.227-.257-.434-.49v12.856H0V.038h4.207V12.72c.23-.255.356-.384.468-.523C7.818 8.29 10.963 4.382 14.095.465c.26-.326.522-.474.955-.465 1.462.029 2.925.011 4.55.011L8.223 13.661l12.248 14.06m41.909-9.585c-.01-1.28-.213-2.265-.635-3.207-1.708-3.81-6.626-4.617-9.343-1.533-1.934 2.196-2.174 5.803-.546 8.233 1.692 2.526 4.8 3.372 7.35 1.937 2.207-1.242 3.08-3.26 3.173-5.43m-.445-8.32V.08h3.97v27.666c-.911 0-1.826.01-2.74-.014-.097-.003-.216-.196-.278-.323-.247-.508-.475-1.025-.734-1.59-1.19 1.145-2.578 1.756-4.14 2.033-4.68.83-9.29-1.881-10.669-6.383-1.15-3.751-.743-7.312 1.817-10.431 2.64-3.217 7.465-4.233 11.02-2.385.603.314 1.14.753 1.754 1.164m20.182 6.486c.014-2.515-2.464-4.752-5.276-4.797-2.801-.045-5.216 2.137-5.278 4.797h10.554Zm-10.576 3.34c.099 1.978 1.762 3.888 3.83 4.397 2.237.55 4.16.02 5.712-1.711.114-.127.3-.27.454-.272 1.303-.022 2.606-.013 3.98-.013-.503 1.327-1.212 2.454-2.173 3.418-1.835 1.841-4.11 2.557-6.679 2.51-4.803-.087-8.703-3.621-9.285-8.37-.333-2.723.015-5.309 1.553-7.626C70.974 8.9 73.91 7.44 77.613 7.83c3.646.383 6.127 2.455 7.532 5.755.79 1.853 1.09 3.801.657 5.81-.014.064-.039.127-.075.247H71.54Zm-26.29 8.085h-3.983v-.598c-.001-3.634.012-7.268-.01-10.902-.01-2.01-1.443-3.913-3.324-4.509-2.724-.863-5.697.973-6.176 3.825a7.26 7.26 0 0 0-.09 1.182c-.006 3.445-.004 6.89-.004 10.335v.653h-3.956V7.992c.9 0 1.8-.012 2.698.015.112.004.253.201.32.338.249.505.473 1.022.724 1.575 1.977-1.847 4.321-2.366 6.862-2.09 3.297.36 6.053 2.945 6.704 6.221.15.755.24 1.534.244 2.303.026 3.652.012 7.303.012 10.954 0 .12-.012.24-.022.42m-23.752 0h3.943V8.005h-3.943zM25.914 2.48c-.003 1.327-1.124 2.425-2.465 2.415-1.303-.01-2.428-1.117-2.444-2.403C20.99 1.198 22.144.049 23.463.046c1.335-.004 2.454 1.108 2.451 2.433"
    />
  </svg>
);

export default SvgKinde;