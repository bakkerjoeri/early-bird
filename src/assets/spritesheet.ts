import { SpriteSheet } from 'heks';

export const spritesheet: SpriteSheet = [
	{
		name: 'bird-blue-idle-left',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 0, y: 0 },
			}
		]
	},
	{
		name: 'bird-blue-idle-right',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 16, y: 0 },
			}
		],
	},
	{
		name: 'bird-blue-singing-left',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 32, y: 0 },
			}
		],
	},
	{
		name: 'bird-blue-singing-right',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 48, y: 0 },
			}
		],
	},
	{
		name: 'bird-blue-pecking-left',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 64, y: 0 },
			}
		],
	},
	{
		name: 'bird-blue-pecking-right',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 80, y: 0 },
			}
		],
	},
	{
		name: 'bird-red-idle-left',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 0, y: 16 },
			}
		],
	},
	{
		name: 'bird-red-idle-right',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 16, y: 16 },
			}
		],
	},
	{
		name: 'bird-red-singing-left',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 32, y: 16 },
			}
		],
	},
	{
		name: 'bird-red-singing-right',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 48, y: 16 },
			}
		],
	},

	{
		name: 'bird-red-pecking-left',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 64, y: 16 },
			}
		],
	},
	{
		name: 'bird-red-pecking-right',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 80, y: 16 },
			}
		],
	},
	{
		name: 'bird-black-idle-left',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 0, y: 32 },
			}
		],
	},
	{
		name: 'bird-black-idle-right',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 16, y: 32 },
			}
		],
	},
	{
		name: 'bird-black-singing-left',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 32, y: 32 },
			}
		],
	},
	{
		name: 'bird-black-singing-right',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 48, y: 32 },
			}
		],
	},
	{
		name: 'bird-black-pecking-left',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 64, y: 32 },
			}
		],
	},
	{
		name: 'bird-black-pecking-right',
		offset: { x: 0, y: 0 },
		frames: [
			{
				file: 'src/assets/sprites/birds.png',
				size: { width: 16, height: 16 },
				origin: { x: 80, y: 32 },
			}
		],
	},
	{
		name: 'bird-blue-hop-left',
		offset: {
			x: 0,
			y: -16,
		},
		frames: [
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 0, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 32, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 64, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 96, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 128, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 96, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 64, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 32, y: 0 }
			},
		],
	},
	{
		name: 'bird-blue-hop-right',
		offset: {
			x: 0,
			y: -16,
		},
		frames: [
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 16, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 48, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 80, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 112, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 144, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 112, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 80, y: 0 }
			},
			{
				file: 'src/assets/sprites/bird-blue-hop.png',
				size: { width: 16, height: 32 },
				origin: { x: 48, y: 0 }
			},
		],
	},
];
