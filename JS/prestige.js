let soulEggGain = D(0)
let soulEggBoost = D(0)

function updatePrestige() {
    if(data.bestSoulEggs.lt(data.soulEggs)) data.bestSoulEggs = data.soulEggs
    const soulAvg = (data.soulEggs.plus(data.bestSoulEggs)).div(2)
    soulEggGain = data.currentEgg >= 3 ? Decimal.floor(Decimal.sqrt(Decimal.sqrt(data.money)).times((D(0.1).times(data.epicResearch[3])).plus(1))) : D(0)
    soulEggBoost = D(1).plus(soulAvg.times(D(0.01).plus(D(0.01).times(data.epicResearch[2]))))
}

function prestige() {
    if(data.currentEgg < 3) return
    data.soulEggs = data.soulEggs.plus(soulEggGain)
    data.hasPrestiged = true
    for(let i = 0; i < data.research.length; i++)
        data.research[i] = D(0)
    eggValueBonus = D(1)
    chickenGain = D(0)
    layRate = D(1)
    data.chickens = D(0)
    data.money = D(0)
    data.currentEgg = 0
}