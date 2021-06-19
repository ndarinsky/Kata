
 //https://leetcode.com/problems/k-closest-points-to-origin/

 function compare(a, b) {
    return a.distance - b.distance
}

var kClosest = function(points, k) {
    const result = points.map((x,i) => 
                              {
        return {
        "index": i,
        "distance": Math.sqrt(x[0]*x[0] + x[1]*x[1])
        }
    }).sort(compare)
    
    const out = []
    let i = 0
    while (i < k) {
        const index = result[i].index
        out.push(points[index])
        i++
    }
  return out      
};