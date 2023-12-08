import React, { useState, useEffect } from 'react';

const prizes = {
  1: ['1獎A'],
  2: ['2獎B'],
  3: ['3獎A', '3獎B'],
  4: ['4獎A', '4獎B', '4獎C', '4獎D', '4獎E'],
  5: ['5獎A', '5獎B', '5獎C', '5獎D', '5獎E', '5獎F', '5獎G', '5獎H', '5獎I', '5獎J', '5獎K'],
};

const drawProbabilities = {
  1: 0.001,
  2: 0.023,
  3: 0.13,
  4: 0.18,
  5: 0.25,
};

const getRandomNumber = () => Math.random();

const getModifiedSelectedPrize = (selectedPrize) =>
  selectedPrize ? selectedPrize.replace(/[A-Z]$/, '') : '';

const App = () => {
  const [remainingPrizes, setRemainingPrizes] = useState({ ...prizes });
  const [drawResult, setDrawResult] = useState('');
  const [drawHistory, setDrawHistory] = useState('');
  const [drawHistoryCount, setDrawHistoryCount] = useState('');
  const [drawCount, setDrawCount] = useState(0);

  const drawPrize = () => {
    const randomNumber = getRandomNumber();
    let cumulativeProbability = 0;

    for (const [prize, probability] of Object.entries(drawProbabilities)) {
      cumulativeProbability += probability;

      if (randomNumber <= cumulativeProbability) {
        const remaining = { ...remainingPrizes };
        const selectedPrize = remaining[prize]?.pop();

        if (remaining[prize] && remaining[prize].length === 0) {
          remaining[prize] = [];
        }

        const modifiedSelectedPrize = getModifiedSelectedPrize(selectedPrize);

        setRemainingPrizes(remaining);
        setDrawResult(
          modifiedSelectedPrize ? `你中了${modifiedSelectedPrize}！` : '這次沒中獎。再試一次吧！'
        );
        setDrawHistoryCount(
          Object.entries(remaining)
            .map(([key, value]) => `${key}獎剩餘:${value.length === 0 ? '0' : value.length}`)
            .join(', ')
        );
        setDrawHistory(Object.values(remaining).flat().join(', '));
        setDrawCount((count) => count + 1);
        return;
      }
    }

    setDrawResult('這次沒中獎。再試一次吧！');
    setDrawCount((count) => count + 1);
  };

  useEffect(() => {
    if (Object.keys(remainingPrizes).length === 0) {
      setDrawResult('所有獎項已抽完！');
    }
  }, [remainingPrizes]);

  return (
    <div>
      <h1>抽獎應用程式</h1>
      <button onClick={drawPrize}>抽獎</button>
      <div>
        <h2>抽獎結果</h2>
        <p>{drawResult}</p>
      </div>
      <div>
        <h2>剩餘獎項數量</h2>
        <p>{drawHistoryCount}</p>
      </div>
      <div>
        <h2>剩餘獎項</h2>
        <p>{drawHistory}</p>
      </div>
      <div>
        <h2>抽獎次數</h2>
        <p>{drawCount}</p>
      </div>
    </div>
  );
};

export default App;
