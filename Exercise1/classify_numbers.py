import math


def proper_divisors(n):
    divs = [1]

    for i in range(2,int(math.sqrt(n))+1):
        if n%i == 0:
            divs.extend([i,int(n/i)])
    return list(set(divs))


def classify_numbers(numlist):
    result = []
    
    for num in numlist:
        divisors = proper_divisors(num)
        add = sum(divisors)

        if add == num:
            result.append((num, "perfecto"))
        elif add > num:
            result.append((num, "abundante"))
        else:
            result.append((num, "defectivo"))

    return result

