

/**
 * Breaking the Records
Maria plays college basketball and wants to go pro. 
Each season she maintains a record of her play. She tabulates the number of 
times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she 
begins counting from there.

For example, assume her scores for the season are represented 
in the array . Scores are in the same order as the games played. 
She would tabulate her results as follows:
                                 Count
Game  Score  Minimum  Maximum   Min Max
 0      12     12       12       0   0
 1      24     12       24       0   1
 2      10     10       24       1   1
 3      24     10       24       1   1
Given the scores for a season, find and print the number of times Maria breaks her records for most and least points scored during the season.

 */

 
// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let most = scores[0];
       let least = scores[0];
       
       let dMost = 0;
       let dLeast = 0;
       
       for (const score of scores) {
           if (most < score) {
               most = score;
               dMost++;
           }
           else if (score < least) {
               least = score;
               dLeast++;
           }
       }
       return [dMost, dLeast];
   }

   let result = [2,5,6,8,10]
   console.log(breakingRecords(result));