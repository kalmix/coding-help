//return nxn matrix with random number on n-range
#include <iostream>
#include <stdlib.h>

int
main()
{
	int a[4][5], i, j;
	for (i = 0; i < 4; ++i)
	{
		for (j = 0; j < 5; ++j)
		{
			a[i][j] = rand() % 10 + 1;
		}
	}

	for (i = 0; i < 4; ++i)
	{
		for (j = 0; j < 5; ++j)
			std::cout << a[i][j] << '\t';
		std::cout << '\n';
	}

	return 0;
}
