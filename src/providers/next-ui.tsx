"use client";

import type { PropsWithChildren } from "react";

import { NextUIProvider } from "@nextui-org/system";

type TNextUiProvider = PropsWithChildren;

export default function NextUiProvider({ children }: TNextUiProvider) {
    return <NextUIProvider>{children}</NextUIProvider>;
}
