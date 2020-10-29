/* Given an object containing counts of both upvotes and downvotes, return
what vote count should be displayed. This is calculated by subtracting the
number of downvotes from upvotes. */

function getVoteCount(votes) {
  var totalVotes = Object.entries(votes);
  if (totalVotes[0][0] === 'upvotes') {
    return totalVotes[0][1] - totalVotes[1][1]; 
    } else {
      return totalVotes[1][1] - totalVotes[0][1];
    }
}
// simpler way of reaching the same solution
/* function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
} */

console.log(getVoteCount({ upvotes: 13, downvotes: 0 })) // ➞ 13
console.log(getVoteCount({ upvotes: 2, downvotes: 33 })) // ➞ -31
console.log(getVoteCount({ upvotes: 132, downvotes: 132})) // ➞ 0
console.log(getVoteCount({ downvotes: 4, upvotes: 1 })) // -3