class SomeClass {

    function printAPairOfPlayers() {
    echo "Players are:";

    echo "Player name: " . $this->getRandomPlayerName();
    echo "Player name: " . $this->getRandomPlayerName();
}

    function printOnePlayer() {
    echo "Player name: " . $this->getRandomPlayerName();
}

    function getRandomPlayerName() {
    // Логика для определения имен игроков //
    return $playerName;
}

}