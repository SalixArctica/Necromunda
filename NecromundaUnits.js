module.exports = class Unit {
    constructor(faction, rank, weapons) {

        switch(faction) {

            case 'cawdor': {
                
                switch(rank) {
                    case 'leader': {
                        setStats(5,3,4,3,3,2,4,2,4,6,5,6);
                        break;
                    }

                    case 'champion': {
                        setStats(5,4,3,3,3,2,4,2,5,6,7,7);
                        break;
                    }
                    
                    case 'ganger': {
                        setStats(5,4,4,3,3,1,4,1,7,7,7,7);
                        break;
                    }

                    case 'juve': {
                        setStats(6,5,5,3,3,1,3,1,8,8,8,9);
                        break;
                    }
                }
                
                break;
            }

            case 'delaque': {
                
                switch(rank) {
                    
                    case 'leader': {
                        setStats(5,3,3,3,3,1,3,1,6,6,5,6);
                        break;
                    }

                    case 'champion' : {
                        setStats(5,3,3,3,3,2,4,2,7,6,6,6);
                        break;
                    }

                    case 'ganger' : {
                        setStats(5,4,4,3,3,1,4,1,7,6,7,7);
                        break;
                    }

                    case 'juve' : {
                        setStats(6,5,5,3,3,1,3,1,9,7,8,8);
                        break;
                    }
                }

                break;
            }

            case 'goliath': {

                switch(rank) {
                    
                    case 'leader': {
                        setStats(4,3,3,4,4,2,3,3,4,3,8,7);
                        break;
                    }

                    case 'champion': {
                        setStats(4,3,4,4,4,2,4,2,6,5,8,8);
                        break;
                    }

                    case 'ganger': {
                        setStats(4,4,4,4,4,1,4,1,8,5,9,8);
                        break;
                    }

                    case 'juve': {
                        setStats(5,4,5,3,3,1,3,1,9,5,10,9);
                        break;
                    }
                }

                break;
            }

            case 'orlock': {
                
                switch(rank) {

                    case 'leader': {
                        setStats(5,3,3,3,3,3,4,2,4,5,5,5);
                        break;
                    }

                    case 'champion': {
                        setStats(5,4,3,3,3,2,4,2,5,6,6,6);
                        break;
                    }

                    case 'ganger': {
                        setStats(5,4,4,3,3,1,4,1,6,7,7,7);
                        break
                    }

                    case 'juve': {
                        setStats(6,5,5,3,3,1,3,1,7,8,8,8);
                        break;
                    }
                }
                break;
            }

            case 'van saar': {
                switch(rank) {
                    case 'leader': {
                        setStats(4,4,2,3,3,2,5,2,4,5,5,4);
                        break;
                    }

                    case 'champion': {
                        setStats(4,4,2,3,3,2,4,1,5,6,6,5);
                        break;
                    }

                    case 'ganger': {
                        setStats(4,4,3,3,3,1,5,1,6,7,7,6);
                        break;
                    }

                    case 'juve': {
                        setStats(5,5,4,3,3,1,4,1,9,8,9,7);
                    }
                }
            }

            case 'escher': {
                switch(rank) {
                    case 'leader': {
                        setStats(5,3,3,3,3,2,2,3,5,6,6,7);
                        break;
                    }

                    case 'champion': {
                        setStats(5,3,3,3,3,2,2,2,6,7,6,6);
                        break;
                    }

                    case 'ganger': {
                        setStats(5,4,4,3,3,1,3,1,7,8,7,7);
                        break;
                    }

                    case 'juve': {
                        setStats(6,4,5,2,3,1,2,1,8,9,8,8);
                    }
                }
            }
        }
    }

    setStats = (m, ws, bs, s, t, w, i, a, ld, cl, will, int) => {
        this.move = m;
        this.weaponSkill = ws;
        this.ballisticSkill = bs;
        this.strength = s;
        this.toughness = t;
        this.wounds = w;
        this.initiative = i;
        this.attacks = a;
        this.leadership = ld;
        this.cool = cl;
        this.willpower = will;
        this.intelligence = int;
    }
}
