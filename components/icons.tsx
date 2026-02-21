import {
  HomeIcon as HomeIconOutline,
  SparklesIcon as SparklesIconOutline,
  WrenchScrewdriverIcon as WrenchScrewdriverIconOutline,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  SparklesIcon as SparklesIconSolid,
  WrenchScrewdriverIcon as WrenchScrewdriverIconSolid,
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
