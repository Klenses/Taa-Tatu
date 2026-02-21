import {
  Bars3Icon as Bars3IconOutline,
  BellIcon as BellIconOutline,
  HomeIcon as HomeIconOutline,
  BoltIcon as BoltIconOutline,
  MagnifyingGlassIcon as MagnifyingGlassIconOutline,
  MoonIcon as MoonIconOutline,
  SparklesIcon as SparklesIconOutline,
  SunIcon as SunIconOutline,
  WrenchScrewdriverIcon as WrenchScrewdriverIconOutline,
  XMarkIcon as XMarkIconOutline,
} from "@heroicons/react/24/outline";
import {
  Bars3Icon as Bars3IconSolid,
  BellIcon as BellIconSolid,
  HomeIcon as HomeIconSolid,
  BoltIcon as BoltIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  MoonIcon as MoonIconSolid,
  SparklesIcon as SparklesIconSolid,
  SunIcon as SunIconSolid,
  WrenchScrewdriverIcon as WrenchScrewdriverIconSolid,
  XMarkIcon as XMarkIconSolid,
} from "@heroicons/react/24/solid";
import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

type IconVariant = "outline" | "solid";

// Template-level icon style: switch this to "solid" to update all exported icons.
const ICON_VARIANT: IconVariant = "outline";

const HOME_ICON = {
  outline: HomeIconOutline,
  solid: HomeIconSolid,
};

const SPARKLES_ICON = {
  outline: SparklesIconOutline,
  solid: SparklesIconSolid,
};

const WRENCH_ICON = {
  outline: WrenchScrewdriverIconOutline,
  solid: WrenchScrewdriverIconSolid,
};

const BARS_3_ICON = {
  outline: Bars3IconOutline,
  solid: Bars3IconSolid,
};

const X_MARK_ICON = {
  outline: XMarkIconOutline,
  solid: XMarkIconSolid,
};

const MAGNIFYING_GLASS_ICON = {
  outline: MagnifyingGlassIconOutline,
  solid: MagnifyingGlassIconSolid,
};

const BELL_ICON = {
  outline: BellIconOutline,
  solid: BellIconSolid,
};

const BOLT_ICON = {
  outline: BoltIconOutline,
  solid: BoltIconSolid,
};

const MOON_ICON = {
  outline: MoonIconOutline,
  solid: MoonIconSolid,
};

const SUN_ICON = {
  outline: SunIconOutline,
  solid: SunIconSolid,
};

export function HomeIcon(props: IconProps) {
  const Icon = HOME_ICON[ICON_VARIANT];
  return <Icon aria-hidden="true" {...props} />;
}

export function SparklesIcon(props: IconProps) {
  const Icon = SPARKLES_ICON[ICON_VARIANT];
  return <Icon aria-hidden="true" {...props} />;
}

export function WrenchScrewdriverIcon(props: IconProps) {
  const Icon = WRENCH_ICON[ICON_VARIANT];
  return <Icon aria-hidden="true" {...props} />;
}

export function Bars3Icon(props: IconProps) {
  const Icon = BARS_3_ICON[ICON_VARIANT];
  return <Icon aria-hidden="true" {...props} />;
}

export function XMarkIcon(props: IconProps) {
  const Icon = X_MARK_ICON[ICON_VARIANT];
  return <Icon aria-hidden="true" {...props} />;
}

export function MagnifyingGlassIcon(props: IconProps) {
  const Icon = MAGNIFYING_GLASS_ICON[ICON_VARIANT];
  return <Icon aria-hidden="true" {...props} />;
}

export function BellIcon(props: IconProps) {
  const Icon = BELL_ICON[ICON_VARIANT];
  return <Icon aria-hidden="true" {...props} />;
}

export function BoltIcon(props: IconProps) {
  const Icon = BOLT_ICON[ICON_VARIANT];
  return <Icon aria-hidden="true" {...props} />;
}

export function MoonIcon(props: IconProps) {
  const Icon = MOON_ICON[ICON_VARIANT];
  return <Icon aria-hidden="true" {...props} />;
}

export function SunIcon(props: IconProps) {
  const Icon = SUN_ICON[ICON_VARIANT];
  return <Icon aria-hidden="true" {...props} />;
}
