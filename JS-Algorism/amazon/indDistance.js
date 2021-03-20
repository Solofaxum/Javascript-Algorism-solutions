
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    return points.sort((a, b) => getLength(a) - getLength(b)).slice(0, K);
};

// we don't need to find square root of c here
// squared length is enough to determine order
var getLength = function([a, b]) {
    return (a * a) + (b * b);
}

//-----------------------------------------------
var kClosest = function(points, K) {
    let result = []
    let distances = []
    var calcDistance = function(side1, side2) {
      let side1Squared = Math.pow(side1, 2)
      let side2Squared = Math.pow(side2, 2)
      return Math.sqrt( (side1Squared + side2Squared) )
    }
      
    for (let i = 0; i < points.length; i++) {
      let currentDistance = calcDistance(points[i][0], points[i][1])
      distances.push({
        id: i,
        points: points[i],
        distance: currentDistance,
      })
    }
    distances.sort((a, b) => (a.distance > b.distance) ? 1 : -1)
    for (let i = 0; i < K; i++) {
      result.push(distances[i].points)
    }
    return result
  };

  //--------------------------------------
//   Solution 1️⃣: using built-in sort
// Time Complexity: O(nlogn), n for points.length.

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
function distance(a) {
    return a[0] * a[0] + a[1] * a[1];
}

var kClosest = function(points, K) {
    return points.sort((a, b) => distance(a) - distance(b)).slice(0, K);
};
// Solution 2️⃣: using min-heap (also known as Priority Queue) in size K.
// Time Complexity: O(nlogk), n for points.length, k for input K

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    const comparator = (b, a) => {        
        if(!a) return 1;
        if(!b) return -1;
        if(!a && !b) return 0;
        return (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1]);
    };
    
    let res = [];
    let heap = new Heap(comparator);
    points.forEach(p => {        
        heap.add(p);
        while(heap.size > K) heap.remove();
    });
    
    while(K-- > 0) res.push(heap.remove());
    return res;
};

/** 
 *  @param {function} comparator || undefined
 */
class Heap {
	constructor(comparator) {
		this.size = 0;
		this.values = [];
		this.comparator = comparator || Heap.minComparator;
	}

	add(val) {
		this.values.push(val);
		this.size ++;
		this.bubbleUp();
	}

	peek() {
		return this.values[0] || null;
	}

	remove() {
		const max = this.values[0];
		const end = this.values.pop();
		this.size --;
		if (this.values.length) {
			this.values[0] = end;
			this.bubbleDown();
		}
		return max;
	}

	bubbleUp() {
		let index = this.values.length - 1;
		let parent = Math.floor((index - 1) / 2);
        
		while (this.comparator(this.values[index], this.values[parent]) < 0) {
			[this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
			index = parent;
			parent = Math.floor((index - 1) / 2);
		}
	}

	bubbleDown() {
		let index = 0, length = this.values.length;

		while (true) {
			let left = null,
				right = null,
				swap = null,
				leftIndex = index * 2 + 1,
				rightIndex = index * 2 + 2;

			if (leftIndex < length) {
				left = this.values[leftIndex];
				if (this.comparator(left, this.values[index]) < 0) swap = leftIndex;
			}

			if (rightIndex < length) {
				right = this.values[rightIndex];
				if ((swap !== null && this.comparator(right, left) < 0) || (swap === null && this.comparator(right, this.values[index]) < 0)) {
					swap = rightIndex;
				}
			}
			if (swap === null) break;

			[this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
			index = swap;
		}
	}
}

// Min Comparator
Heap.minComparator = (a, b) => { return a - b; }

// Max Comparator
Heap.maxComparator = (a, b) => { return b - a; }