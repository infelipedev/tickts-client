import { extendTheme } from "@chakra-ui/react";

import { fonts } from "theme/foundations/fonts";
import { styles } from "theme/styles";

const overrides = { fonts, styles };

export const theme = extendTheme(overrides);
