from classify_numbers import *

if __name__ == '__main__':
    print ("Ingresa tu lista de números separados por espacio:")
    numlist_input = input()

    try:
        numlist = list(map(int, numlist_input.split()))

        print (classify_numbers(numlist))
    except (ValueError, TypeError) as ve:
            print ("Value error detected", ve)


# Example input: 12 6 28 100 18 10
# Example output: [(12, 'abundante'), (6, 'perfecto'), (28, 'perfecto'), (100, 'abundante'), (18, 'abundante'), (10, 'defectivo')]