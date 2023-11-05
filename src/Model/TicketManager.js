import { pickUniqueNumbersInRange } from '../../utils/index.js';
import { LOTTO } from '../../constants/index.js';

class TicketManager {
    constructor() {
        this.tickets = [];
        this.matches = {
            three: 0,
            four : 0,
            five : 0,
            bonus: 0,
            six: 0
        }
    }

    addTicket() {
        const ticket = pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.COUNT);
        this.tickets.push(ticket);
    }

    getTickets() {
        return this.tickets;
    }

    countMatchAllNumber(lotto, bonus){
        this.tickets.forEach((ticket) => {
            const lottoMatch = lotto.getMatchCount(ticket, bonus.number);
            this.countMatchNumber(lottoMatch);
            console.log(ticket);
        })
    }

    countMatchNumber(lottoMatch) {
        switch (lottoMatch.main) {
            case 3:
                this.matches.three++;
                break;
            case 4:
                this.matches.four++;
                break;
            case 5:
                lottoMatch.bonus? this.matches.bonus++ :this.matches.five++;
                break;
            case 6:
                this.matches.six++;
                break;
        }
    }
}


export default TicketManager;