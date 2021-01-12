<svelte:head>
	<style>
		body {
			text-align: center;
			font-family: Consolas, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace;
			background: rgb(8, 16, 8);
			color: rgb(192, 224, 192);
			transition: 250ms ease-in-out
		}

		a {
			text-shadow: 0 0 2px, 0 0 5px;
			color: unset;
			text-decoration: unset
		}

		a:hover {
			color: white;
			text-decoration: underline;
			cursor: pointer;
		}

		.skip-link {
			position: absolute;
			top: -40px;
			left: 0;
			background: #000000;
			color: white;
			padding: 8px;
			z-index: 100
		}

		.skip-link:focus {
			top: 0
		}
	</style>
</svelte:head>

<script lang=ts>
	import JSOnly from "../components/JSOnly.svelte"
	import { onMount } from "svelte"

	onMount(changeTheme)

	function changeTheme() {
		console.log(new Error)
		document.body.style.background = cssF("rgb", rng(15), rng(31), rng(15))
		document.body.style.color = cssF("rgb", 255 - rng(127), 255 - rng(63), 255 - rng(127))
	}

	function cssF(name: string, ...args: (boolean | number | string)[]) {
		return `${name}(${args.join(", ")})`
	}

	function rng(max: number) {
		return Math.floor(Math.random() * (max + 1))
	}
</script>

<a class="skip-link" href="#main">Skip to main</a>

<br>
i'm Samual<br>
-----------<br>
<br>
<br>

<div id=main style="display: inline-block; text-align: left">
	i like to make stuff<br>
	<br>
	everything i make is on <a href="https://github.com/samualtnorman/">GitHub</a><br>
	<br>
	<br>
	i like <a href="https://www.typescriptlang.org/">TypeScript</a> and JavaScript<br>
	<br>
	<br>
	i also like to play games<br>
	<br>
	like <a href="https://store.steampowered.com/app/469920/hackmud/">hackmud</a><br>

	<JSOnly>
		<br>
		<br>
		<br>
		<a on:click={changeTheme} href=.>don't like the colour theme?</a>
	</JSOnly>
</div>
