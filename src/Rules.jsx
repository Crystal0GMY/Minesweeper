export default function Rules() {
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #ddd', borderRadius: '10px' }}>
            <h2>Minesweeper Rules</h2>
            <ol>
                <li>The game board is divided into cells, some containing mines and others are safe.</li>
                <li>Your goal is to reveal all the safe cells without detonating any mines.</li>
                <li>Click on a cell to reveal what is underneath.</li>
                <li>If you click on a mine, the game ends.</li>
                <li>If you reveal a safe cell, it will show a number indicating how many mines are adjacent to that cell.</li>
                <li>Use these numbers to deduce which neighboring cells may contain mines.</li>
                <li>Right-click (or use a flagging mechanism) to mark a cell you suspect has a mine.</li>
            </ol>
            <p>Tip: The game is won when all non-mine cells are revealed, and all mines are flagged correctly!</p>
        </div>
    )
}