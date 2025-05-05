let inherit (import <nixpkgs> {}) fetchFromGitHub mkShellNoCC cacert git; in

let fetchNixpkgs =
	{ rev, sha256 ? "" }: import (fetchFromGitHub { owner = "NixOS"; repo = "nixpkgs"; inherit rev sha256; }) {}; in

let inherit (fetchNixpkgs {
	rev = "7a2622e2c0dbad5c4493cb268aba12896e28b008"; # unstable 2025/05/04
	sha256 = "MHmBH2rS8KkRRdoU/feC/dKbdlMkcNkB5mwkuipVHeQ=";
}) nodejs_22 pnpm; in

mkShellNoCC { packages = [ cacert git nodejs_22 pnpm ]; }
