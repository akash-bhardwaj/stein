
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
 * How MERGE OPERATION works?
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
 *                                                I've used 🔺 to show the seperation of sub-arrays.
 *
 *      Conditions:
 *        1. aux[i] > aux[j] ===> arr[k] = aux[j] and also increment 'k' and 'j'
 *        2. aux[i] < aux[j] ===> arr[k] = aux[i] and also increment 'k' and 'i'
 *        3. aux[i] === aux[j] ===> arr[k] = aux[i] and also increment 'k' and 'i'
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
 *            "Since our 1st sub array is exhausted, we can simply merge the remaining part of the 2nd subarray to our MUTATING ORIGINAL ARRAY(arr)"
 *            How can we simple merge the remaining part without comparing? Because 2 sub arrays were already sorted before we started merging two sub arrays.
 *            Since one of our array is exhausted, we don't need to check/compare anything.
 *
 *            Do we really need to merge the remaining part? No! Because we copied all the content before we started merging, so it's already there if you notice.
 *            In this case, R & T are already present in 'arr' because of the copy OPERATION we performed in the beginning. 😅
 *
 *             arr = [A, C, E, E, E, G, M, R, R, T] is our SORTED ARRAY.
 *
 *
 *                        --------------- T H A T 'S    H O W     M E R G E     O P E R A T I O N     W O R K S ----------------- 
 *
 */


class Merge {

}

const merge = new Merge()
merge.sort()
