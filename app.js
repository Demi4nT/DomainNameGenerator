
    let pronoun = ['the','our', 'my'];
    let adj = ['great', 'big', 'super'];
    let noun = ['jogger','racoon', 'cat'];
    let ext = ['.com', '.cl', '.us'];


        for (let i = 0; i < pronoun.length; i++) {

            for (let j = 0; j < adj.length; j++) {

                for (let a = 0; a < noun.length; a++) {

                    for (let s = 0; s < ext.length; s++) {

                        console.log (pronoun[i] + adj[j] + noun[a] + ext[s]);

                    };
                };
            };
        };
