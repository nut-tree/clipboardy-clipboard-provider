import {providerRegistry} from "@nut-tree/nut-js";

import Clipboard from "./lib/clipboardy-clipboard.class";

providerRegistry.registerClipboardProvider(new Clipboard());
