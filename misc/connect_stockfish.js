import { useEffect, useRef, useState } from 'react';

export function useStockfish18() {
const workerRef = useRef(null);
const [engineReady, setEngineReady] = useState(false);

useEffect(() => {
// Spin up Stockfish 18 in a background worker thread
workerRef.current = new Worker('/stockfish-18.js');

workerRef.current.onmessage = (event) => {
const uciLine = event.data;
console.log('SF18:', uciLine);

if (uciLine === 'readyok') {
setEngineReady(true);
}

if (uciLine.startsWith('bestmove')) {
const parts = uciLine.split(' '); // ['bestmove', 'e2e4', 'ponder', 'e7e5']
const bestMove = parts[1];

// Pass the calculated move directly to your legimite-lang hardware wrapper
sendToOpenChessMicrocontroller(bestMove);
}
};

// Initialize Stockfish 18 UCI handshake
workerRef.current.postMessage('uci');
// Tell SF18 to optimize memory for browser threads
workerRef.current.postMessage('setoption name Threads value 2'); 
workerRef.current.postMessage('isready');

return () => workerRef.current.terminate();
}, []);

const requestMoveAnalysis = (currentFen) => {
if (workerRef.current && engineReady) {
workerRef.current.postMessage(`position fen ${currentFen}`);
// SF18 is extremely efficient; a 1000ms search or depth 12 is plenty for real-time play
workerRef.current.postMessage('go movetime 1000'); 
}
};

return { requestMoveAnalysis, engineReady };
}

function sendToOpenChessMicrocontroller(move) {
// Integrate your Web Serial/Bluetooth link to legimite-lang firmware here
console.log(`Sending UCI move string directly to hardware: ${move}`);
}
