def compute_sum_and_product(a: int, b: int) -> tuple[int, int]:
    """
    Computes the sum and product of two integers.

    Parameters:
    a (int): The first number.
    b (int): The second number.

    Returns:
    tuple[int, int]: A tuple containing the sum and product of the numbers.
    """
    total = a + b
    product = a * b
    return total, product

# Perform computations
x = 7
y = 3
sum_result, product_result = compute_sum_and_product(x, y)
print(f"Sum of {x} and {y} = {sum_result}")
print(f"Product of {x} and {y} = {product_result}")
