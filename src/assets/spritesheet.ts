import { Sprite } from 'heks';

export const spritesheet: Sprite[] = [
	{
		name: 'bird-blue-idle-left',
		path: 'src/assets/sprites/birds.png',
		offset: { x: 0, y: 0 },
		frames: [
			{ size: { width: 16, height: 16 }, origin: { x: 0, y: 0 } }
		]
	},
	{
		name: 'bird-blue-idle-right',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 16, y: 0 },
			}
		],

		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-blue-singing-left',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 32, y: 0 },
			}
		],

		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-blue-singing-right',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 48, y: 0 },
			}
		],

		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-blue-pecking-left',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 64, y: 0 },
			}
		],

		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-blue-pecking-right',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 80, y: 0 },
			}
		],

		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-red-idle-left',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 0, y: 16 },
			}
		],

		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-red-idle-right',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 16, y: 16 },
			}
		],

		offset: { x: 0, y: 0 },
	},

	{
		name: 'bird-red-singing-left',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 32, y: 16 },
			}
		],

		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-red-singing-right',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 48, y: 16 },
			}
		],

		offset: { x: 0, y: 0 },
	},

	{
		name: 'bird-red-pecking-left',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 64, y: 16 },
			}
		],

		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-red-pecking-right',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 80, y: 16 },
			}
		],

		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-black-idle-left',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 0, y: 32 },
			}
		],

		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-black-idle-right',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 16, y: 32 },
			}
		],

		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-black-singing-left',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 32, y: 32 },
			}
		],

		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-black-singing-right',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 48, y: 32 },
			}
		],

		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-black-pecking-left',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 64, y: 32 },
			}
		],
		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-black-pecking-right',
		path: 'src/assets/sprites/birds.png',
		frames: [
			{
				size: { width: 16, height: 16 },
				origin: { x: 80, y: 32 },
			}
		],
		offset: { x: 0, y: 0 },
	},
	{
		name: 'bird-blue-hop-left',
		path: 'src/assets/sprites/bird-blue-hop.png',
		offset: {
			x: 0,
			y: -16,
		},
		frames: [
			{ size: { width: 16, height: 32 }, origin: { x: 0, y: 0 } },
			{ size: { width: 16, height: 32 }, origin: { x: 32, y: 0 } },
			{ size: { width: 16, height: 32 }, origin: { x: 64, y: 0 } },
			{ size: { width: 16, height: 32 }, origin: { x: 96, y: 0 } },
			{ size: { width: 16, height: 32 }, origin: { x: 128, y: 0 } },
		],
		animation: [0, 1, 2, 3, 4, 3, 2, 1],
	},
	{
		name: 'bird-blue-hop-right',
		path: 'src/assets/sprites/bird-blue-hop.png',
		offset: {
			x: 0,
			y: -16,
		},
		frames: [
			{ size: { width: 16, height: 32 }, origin: { x: 16, y: 0 } },
			{ size: { width: 16, height: 32 }, origin: { x: 48, y: 0 } },
			{ size: { width: 16, height: 32 }, origin: { x: 80, y: 0 } },
			{ size: { width: 16, height: 32 }, origin: { x: 112, y: 0 } },
			{ size: { width: 16, height: 32 }, origin: { x: 144, y: 0 } },
		],
		animation: [0, 1, 2, 3, 4, 3, 2, 1],
	},
];
