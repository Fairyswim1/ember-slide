export const levels=[
  {
    "id": 1,
    "title": "첫 불씨",
    "board": [
      {
        "k": "x",
        "v": 1
      },
      {
        "k": "x",
        "v": 2
      },
      null,
      null,
      {
        "k": "n",
        "v": 1
      },
      {
        "k": "n",
        "v": 2
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    "target": {
      "x": 3,
      "n": 3
    },
    "limit": 3,
    "decision": "같은 종류끼리 합치기",
    "solution": [
      "left"
    ]
  },
  {
    "id": 2,
    "title": "엇갈린 조각",
    "board": [
      {
        "k": "x",
        "v": 2
      },
      null,
      {
        "k": "x",
        "v": 3
      },
      null,
      {
        "k": "n",
        "v": 1
      },
      {
        "k": "n",
        "v": 3
      },
      null,
      {
        "k": "x",
        "v": 1
      },
      null,
      null,
      null,
      null,
      null,
      null,
      "#",
      {
        "k": "n",
        "v": 2
      }
    ],
    "target": {
      "x": 6,
      "n": 6
    },
    "limit": 6,
    "decision": "합치기 전에 가로·세로 줄 맞추기",
    "solution": [
      "left",
      "up",
      "right",
      "up"
    ]
  },
  {
    "id": 3,
    "title": "돌아가는 길",
    "board": [
      null,
      {
        "k": "x",
        "v": 1
      },
      {
        "k": "x",
        "v": 2
      },
      "#",
      null,
      null,
      {
        "k": "n",
        "v": 3
      },
      null,
      {
        "k": "n",
        "v": 2
      },
      null,
      {
        "k": "x",
        "v": 3
      },
      null,
      null,
      null,
      null,
      {
        "k": "n",
        "v": 1
      }
    ],
    "target": {
      "x": 6,
      "n": 6
    },
    "limit": 6,
    "decision": "합치기 전에 가로·세로 줄 맞추기",
    "solution": [
      "left",
      "up",
      "left",
      "up"
    ]
  },
  {
    "id": 4,
    "title": "두 갈래 작업대",
    "board": [
      null,
      null,
      null,
      {
        "k": "n",
        "v": 1
      },
      "#",
      {
        "k": "x",
        "v": 3
      },
      "#",
      null,
      null,
      null,
      {
        "k": "x",
        "v": 1
      },
      null,
      null,
      {
        "k": "n",
        "v": 2
      },
      {
        "k": "x",
        "v": 2
      },
      {
        "k": "n",
        "v": 3
      }
    ],
    "target": {
      "x": 6,
      "n": 6
    },
    "limit": 8,
    "decision": "합치기 전에 가로·세로 줄 맞추기",
    "solution": [
      "up",
      "right",
      "up",
      "left",
      "down",
      "left"
    ]
  },
  {
    "id": 5,
    "title": "빈자리 만들기",
    "board": [
      {
        "k": "n",
        "v": -1
      },
      "#",
      null,
      {
        "k": "x",
        "v": -2
      },
      null,
      null,
      {
        "k": "n",
        "v": 1
      },
      null,
      {
        "k": "x",
        "v": 2
      },
      null,
      {
        "k": "n",
        "v": 3
      },
      {
        "k": "n",
        "v": 2
      },
      {
        "k": "x",
        "v": 3
      },
      "#",
      null,
      null
    ],
    "target": {
      "x": 3,
      "n": 5
    },
    "limit": 7,
    "decision": "합이 0인 짝을 먼저 만나게 해 빈자리 만들기",
    "solution": [
      "right",
      "up",
      "left",
      "down",
      "left"
    ]
  },
  {
    "id": 6,
    "title": "먼저 없앨 조각",
    "board": [
      {
        "k": "x",
        "v": 3
      },
      null,
      null,
      {
        "k": "n",
        "v": 2
      },
      {
        "k": "x",
        "v": 2
      },
      null,
      "#",
      null,
      {
        "k": "n",
        "v": -1
      },
      {
        "k": "n",
        "v": 1
      },
      {
        "k": "n",
        "v": 3
      },
      {
        "k": "x",
        "v": -2
      },
      "#",
      null,
      null,
      null
    ],
    "target": {
      "x": 3,
      "n": 5
    },
    "limit": 7,
    "decision": "합이 0인 짝을 먼저 만나게 해 빈자리 만들기",
    "solution": [
      "left",
      "down",
      "left",
      "up",
      "left"
    ]
  },
  {
    "id": 7,
    "title": "벽 너머의 빛",
    "board": [
      null,
      "#",
      {
        "k": "n",
        "v": 3
      },
      {
        "k": "x",
        "v": -2
      },
      null,
      {
        "k": "n",
        "v": 2
      },
      {
        "k": "x",
        "v": 2
      },
      "#",
      {
        "k": "n",
        "v": 1
      },
      {
        "k": "x",
        "v": 3
      },
      null,
      null,
      null,
      null,
      {
        "k": "n",
        "v": -1
      },
      null
    ],
    "target": {
      "x": 3,
      "n": 5
    },
    "limit": 8,
    "decision": "합이 0인 짝을 먼저 만나게 해 빈자리 만들기",
    "solution": [
      "left",
      "down",
      "right",
      "up",
      "left",
      "up"
    ]
  },
  {
    "id": 8,
    "title": "둘을 위한 순서",
    "board": [
      null,
      null,
      {
        "k": "x",
        "v": 3
      },
      null,
      "#",
      null,
      {
        "k": "n",
        "v": 1
      },
      null,
      null,
      {
        "k": "n",
        "v": 2
      },
      {
        "k": "x",
        "v": -2
      },
      {
        "k": "n",
        "v": 3
      },
      null,
      {
        "k": "x",
        "v": 2
      },
      "#",
      {
        "k": "n",
        "v": -1
      }
    ],
    "target": {
      "x": 3,
      "n": 5
    },
    "limit": 7,
    "decision": "합이 0인 짝을 먼저 만나게 해 빈자리 만들기",
    "solution": [
      "left",
      "down",
      "left",
      "right",
      "up"
    ]
  },
  {
    "id": 9,
    "title": "남겨 둔 불씨",
    "board": [
      null,
      null,
      {
        "k": "n",
        "v": 1
      },
      {
        "k": "x",
        "v": 1
      },
      null,
      "#",
      null,
      "#",
      null,
      {
        "k": "x",
        "v": 2
      },
      null,
      {
        "k": "n",
        "v": 2
      },
      {
        "k": "n",
        "v": 4
      },
      {
        "k": "n",
        "v": -2
      },
      {
        "k": "x",
        "v": -2
      },
      {
        "k": "x",
        "v": 3
      }
    ],
    "target": {
      "x": 4,
      "n": 5
    },
    "limit": 9,
    "decision": "없앨 조각과 남길 조각의 순서, 벽을 돌아갈 방향 함께 판단",
    "solution": [
      "up",
      "right",
      "down",
      "left",
      "down",
      "right",
      "up"
    ]
  },
  {
    "id": 10,
    "title": "반대쪽 먼저",
    "board": [
      {
        "k": "n",
        "v": 1
      },
      {
        "k": "x",
        "v": 1
      },
      null,
      {
        "k": "x",
        "v": 2
      },
      "#",
      {
        "k": "x",
        "v": 3
      },
      {
        "k": "n",
        "v": -2
      },
      "#",
      null,
      null,
      null,
      null,
      {
        "k": "n",
        "v": 2
      },
      null,
      {
        "k": "n",
        "v": 4
      },
      {
        "k": "x",
        "v": -2
      }
    ],
    "target": {
      "x": 4,
      "n": 5
    },
    "limit": 9,
    "decision": "없앨 조각과 남길 조각의 순서, 벽을 돌아갈 방향 함께 판단",
    "solution": [
      "down",
      "right",
      "up",
      "left",
      "down",
      "left",
      "up"
    ]
  },
  {
    "id": 11,
    "title": "작은 우회",
    "board": [
      null,
      null,
      {
        "k": "x",
        "v": 1
      },
      {
        "k": "n",
        "v": 1
      },
      null,
      null,
      {
        "k": "n",
        "v": 4
      },
      null,
      {
        "k": "x",
        "v": -2
      },
      {
        "k": "n",
        "v": 2
      },
      {
        "k": "x",
        "v": 3
      },
      "#",
      {
        "k": "x",
        "v": 2
      },
      "#",
      null,
      {
        "k": "n",
        "v": -2
      }
    ],
    "target": {
      "x": 4,
      "n": 5
    },
    "limit": 9,
    "decision": "없앨 조각과 남길 조각의 순서, 벽을 돌아갈 방향 함께 판단",
    "solution": [
      "right",
      "down",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 12,
    "title": "새벽의 공방",
    "board": [
      null,
      null,
      "#",
      {
        "k": "n",
        "v": -2
      },
      {
        "k": "n",
        "v": 2
      },
      "#",
      null,
      null,
      null,
      {
        "k": "x",
        "v": 2
      },
      {
        "k": "n",
        "v": 4
      },
      {
        "k": "x",
        "v": 1
      },
      {
        "k": "x",
        "v": -2
      },
      {
        "k": "x",
        "v": 3
      },
      {
        "k": "n",
        "v": 1
      },
      null
    ],
    "target": {
      "x": 4,
      "n": 5
    },
    "limit": 9,
    "decision": "없앨 조각과 남길 조각의 순서, 벽을 돌아갈 방향 함께 판단",
    "solution": [
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up"
    ]
  }
];
export const tutorialLevel={...levels[0],id:0,limit:5};
