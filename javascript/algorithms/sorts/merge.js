
/**
 * Merge Sort (Jon von Neumann)
 *    ➤ Divide and Conquer
 *    ➤ Recursive
 *
 * Steps:
 *    → Divide an array into 2 halves.
 *    → Recursively sort 2 halves.
 *    → Merge 2 halves.
 *
 * How to find the mid of the array?
 *    ➤ mid = low + (high - low) / 2
 *
 * SORTING HAPPENS IN THE MERGE OPERATION ONLY!
 *    ➤ Since it's a Divide and Conquer method(Recursive), we break down our array into sub arrays till
 *       each subarray is has length equal to 1. (N single item sub-arrays)
 *       Consider this array:  [E, A, M, A, R, X, C, K, O, L]
 *       After we are done with 'sub-arraying' this array, we get:
 *       [E] [A] [M] [A] [R] [X] [C] [K] [O] [L]
 *
 *       We take 1st two element -> Sort and Merge.
 *       If you read 'HOW MERGE OPERATION WORKS', you see we have 3 conditions. That's were you sort them. And,
 *       when you put them in the arr (See, arr[k] = aux[i or j]) => That's where you merge them.
 *
 * Let's see this in more detail now :-
 *
 * So, How MERGE OPERATION works?
 *    Consider this array: [E, E, G, M, R, A, C, E, R, T]
 *    → Break it in 2 part by finding the 'mid' of the array. (mid = low + (high - low) / 2)
 *    → Initialize an auxilliary array (aux) and copy the content of 'arr' into 'aux'
 *    → Let consider these 2 sub arrays which we got after finding the 'mid' to be sorted sub-arrays.
 *       In this case if you notice, two sub-arrays are sorted.
 *
 *    Objective: Merge this 2 sorted sub-arrays.
 *      arr = [E, E, G, M, R, A, C, E, R, T]
 *             k                              ==> pointer 'k' which operates on our original array and mutate it
 *                                                based on the conditions described below
 *      aux = [E, E, G, M, R, A, C, E, R, T]
 *             i            🔺j               ==> 2 pointers i & j. Both starts from the 1st element of two sub-arrays.
 *                                                I've used 🔺 to show the separation of sub-arrays.
 *
 *      Conditions:
 *        1. aux[i] > aux[j]    ➤ arr[k] = aux[j] and also increment 'k' and 'j'
 *        2. aux[i] < aux[j]    ➤ arr[k] = aux[i] and also increment 'k' and 'i'
 *        3. aux[i] === aux[j]  ➤ arr[k] = aux[i] and also increment 'k' and 'i'
 *
 *      Let's start:
 *        → compare aux[i] and aux[j]
 *            ➤ aux[i], which is E, is GREATER than aux[j] which is A. This satisfies our Condition 1.
 *                  Resulting arrays:
 *                    arr = [A, E, G, M, R, A, C, E, R, T]
 *                              k                             => arr[k] = aux[j] & 'k' is incremented by 1
 *                    aux = [E, E, G, M, R, A, C, E, R, T]
 *                           i            🔺   j              => 'i' remains the same, 'j' is incremented
 *
 *            ➤ aux[i], which is E, is GREATER than aux[j] which is C. This satisfies our Condition 1.
 *                  Resulting arrays:
 *                    arr = [A, C, G, M, R, A, C, E, R, T]
 *                                 k                           => arr[k] = aux[j] & 'k' is incremented by 1.
 *                    aux = [E, E, G, M, R, A, C, E, R, T]
 *                           i            🔺      j            => 'i' remains the same, 'j' is incremented.
 *
 *            ➤ aux[i], which is E, is EQUAL to aux[j] which is also E. This satisfies our Condition 3.
 *                  Resulting arrays:
 *                    arr = [A, C, E, M, R, A, C, E, R, T]
 *                                    k                       => arr[k] = aux[i] & 'k' is incremented by 1
 *                    aux = [E, E, G, M, R, A, C, E, R, T]
 *                              i         🔺      j           => 'i' is incremented, 'j' remains the same.
 *
 *            ➤ Again, aux[i], which is E, is EQUAL to aux[j] which is also E. This satisfies our Condition 3.
 *                  Resulting arrays:
 *                    arr = [A, C, E, E, R, A, C, E, R, T]
 *                                       k                     => arr[k] = aux[i] & 'k' is incremented by 1
 *                    aux = [E, E, G, M, R, A, C, E, R, T]
 *                                 i      🔺      j            => 'i' is incremented, 'j' remains the same.
 *
 *            ➤ aux[i], which is G, is GREATER than aux[j] which is E. This satisfies our Condition 1.
 *                  Resulting arrays:
 *                    arr = [A, C, E, E, E, A, C, E, R, T]
 *                                          k                  => arr[k] = aux[j] & 'k' is incremented by 1.
 *                    aux = [E, E, G, M, R, A, C, E, R, T]
 *                                 i      🔺         j         => 'i' remains the same, 'j' is incremented.
 *
 *            ➤ aux[i], which is G, is SMALLER than aux[j] which is R. This satisfies our Condition 2.
 *                  Resulting arrays:
 *                    arr = [A, C, E, E, E, G, C, E, R, T]
 *                                             k               => arr[k] = aux[i] & 'k' is incremented by 1.
 *                    aux = [E, E, G, M, R, A, C, E, R, T]
 *                                    i   🔺         j         => 'i' is incremented, 'j' remains the same.
 *
 *            ➤ aux[i], which is M, is SMALLER than aux[j] which is R. This satisfies our Condition 2.
 *                  Resulting arrays:
 *                    arr = [A, C, E, E, E, G, M, E, R, T]
 *                                                k            => arr[k] = aux[i] & 'k' is incremented by 1.
 *                    aux = [E, E, G, M, R, A, C, E, R, T]
 *                                       i🔺         j         => 'i' is incremented, 'j' remains the same.
 *
 *            ➤ aux[i], which is R, is EQUAL to aux[j] which is R. This satisfies our Condition 3.
 *                  Resulting arrays:
 *                    arr = [A, C, E, E, E, G, M, R, R, T]
 *                                                   k          => arr[k] = aux[i] & 'k' is incremented by 1.
 *                    aux = [E, E, G, M, R, A, C, E, R, T]
 *                                        🔺 i        j         => 'i' is incremented, 'j' remains the same.
 *
 *    Since our 1st sub array is exhausted, we can simply merge the remaining part of the 2nd subarray
 *    to our MUTATING ORIGINAL ARRAY(arr)
 *
 *     How can we simple merge the remaining part without comparing? Because 2 sub arrays were already sorted
 *     before we started merging two sub arrays.
 *
 *     Since one of our array is exhausted, we don't need to check/compare anything.
 *
 *     Do we really need to merge the remaining part? No! Because we copied all the content before we started
 *     merging, so it's already there if you notice. In this case, R & T are already present in 'arr' because of
 *     the copy OPERATION we performed in the beginning. 😅
 *
 *     arr = [A, C, E, E, E, G, M, R, R, T] is our SORTED ARRAY after MERGE OPERATION.
 *
 *
 *       --------------- T H A T 'S    H O W     M E R G E     O P E R A T I O N     W O R K S -----------------
 *
 * Complexity: N Log N
 * Stability: Stable. Why?
 *      ➤ Unlike Quick Sort, there are no long exchanges.
 *      ➤ If two items are equal we choose from 1st array thereby preserving the order in original array.
 *
 * Improvements:
 *      ➤ Use insertion sort for small arrays.
 *      ➤ Don't perform MERGE OPERATION if last item of the 1st sub array is smaller than or equal to the first item of the 2nd subarray.
 *
 * Problem: Extra space for auxilliary array, N.
 *
 */


// METHOD 1
class Merge {

    constructor (arr) {
        this.arr = arr
        this.aux = arr.slice()
    }

    merge (low, mid, high) {
        let arr = this.arr
        let aux = this.aux

        // copy all content of arr to aux
        for (let k = low; k <= high; k++) {
            aux[k] = arr[k]
        }

        // merge operation
        let i = low
        let j = mid + 1
        for (let k = low; k <= high; k++) {
            if (i > mid) { // check if our 1st sub array is exhausted
                arr[k] = aux[j++]
            } else if (j > high) { // check if our 2nd sub array is exhausted
                arr[k] = aux[i++]
            } else if (aux[i] > aux[j]) {
                arr[k] = aux[j++]
            } else {
                arr[k] = aux[i++]
            }
        }
    }

    sort (low, high) {
        let arr = this.arr
        if (high <= low) return
        let mid = Math.floor(low + (high - low)/2)
        this.sort(low, mid)
        this.sort(mid+1, high)
        this.merge(low, mid, high)
    }

}

const arr = [21, 92, 4, 22, 1, 67, 99, 102, 76, 43, 11]
const low = 0
const high = arr.length - 1
const merge = new Merge(arr)
merge.sort(low, high)

/**
    STACK TRACE OF MERGE SORT FOR ABOVE GIVEN ARRAY:

    🔺 -> marker shows which elements are under operation.

    LOW -> :  0
    MID : ->  0
    HIGH : ->  1
    AUX :  (11) [21, 92, 4, 22, 1, 67, 99, 102, 76, 43, 11]
    arr :  (11) [21, 92, 4, 22, 1, 67, 99, 102, 76, 43, 11]
                 🔺  🔺
    ----------------------------

    LOW -> :  0
    MID : ->  1
    HIGH : ->  2
    AUX :  (11) [21, 92, 4, 22, 1, 67, 99, 102, 76, 43, 11]
    arr :  (11) [4, 21, 92, 22, 1, 67, 99, 102, 76, 43, 11]
                 🔺 🔺  🔺
    ----------------------------

    LOW -> :  3
    MID : ->  3
    HIGH : ->  4
    AUX :  (11) [21, 92, 4, 22, 1, 67, 99, 102, 76, 43, 11]
    arr :  (11) [4, 21, 92, 1, 22, 67, 99, 102, 76, 43, 11]
                            🔺 🔺
    ----------------------------

    LOW -> :  3
    MID : ->  4
    HIGH : ->  5
    AUX :  (11) [21, 92, 4, 1, 22, 67, 99, 102, 76, 43, 11]
    arr :  (11) [4, 21, 92, 1, 22, 67, 99, 102, 76, 43, 11]
                            🔺 🔺  🔺
    ----------------------------

    LOW -> :  0
    MID : ->  2
    HIGH : ->  5
    AUX :  (11) [4, 21, 92, 1, 22, 67, 99, 102, 76, 43, 11]
    arr :  (11) [1, 4, 21, 22, 67, 92, 99, 102, 76, 43, 11]
                🔺 🔺  🔺  🔺   🔺  🔺
    ----------------------------

    LOW -> :  6
    MID : ->  6
    HIGH : ->  7
    AUX :  (11) [4, 21, 92, 1, 22, 67, 99, 102, 76, 43, 11]
    arr :  (11) [1, 4, 21, 22, 67, 92, 99, 102, 76, 43, 11]
                                       🔺   🔺
    ----------------------------

    LOW -> :  6
    MID : ->  7
    HIGH : ->  8
    AUX :  (11) [4, 21, 92, 1, 22, 67, 99, 102, 76, 43, 11]
    arr :  (11) [1, 4, 21, 22, 67, 92, 76, 99, 102, 43, 11]
                                        🔺 🔺   🔺
    ----------------------------

    LOW -> :  9
    MID : ->  9
    HIGH : ->  10
    AUX :  (11) [4, 21, 92, 1, 22, 67, 99, 102, 76, 43, 11]
    arr :  (11) [1, 4, 21, 22, 67, 92, 76, 99, 102, 11, 43]
                                                    🔺  🔺
    ----------------------------

    LOW -> :  6
    MID : ->  8
    HIGH : ->  10
    AUX :  (11) [4, 21, 92, 1, 22, 67, 76, 99, 102, 11, 43]
    arr :  (11) [1, 4, 21, 22, 67, 92, 11, 43, 76, 99, 102]
                                        🔺 🔺  🔺   🔺  🔺
    ----------------------------

    LOW -> :  0
    MID : ->  5
    HIGH : ->  10
    AUX :  (11) [1, 4, 21, 22, 67, 92, 11, 43, 76, 99, 102]
    arr :  (11) [1, 4, 11, 21, 22, 43, 67, 76, 92, 99, 102]
                🔺  🔺 🔺  🔺   🔺  🔺  🔺  🔺   🔺  🔺  🔺
    ----------------------------
 */
