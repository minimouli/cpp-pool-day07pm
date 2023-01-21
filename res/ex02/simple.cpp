/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <iostream>
#include "KreogCom.hpp"

int main() {

    KreogCom k10(1, 1, 10);
    std::cout << "does 10 have a mate ? " << (k10.getCom() != nullptr ? "true" : "false") << std::endl;

    k10.addCom(9, 9, 90);
    std::cout << "does 10 have a mate after addCom ? " << (k10.getCom() != nullptr ? "true" : "false") << std::endl;

    k10.removeCom();
    std::cout << "does 10 have a mate after removeCom ? " << (k10.getCom() != nullptr ? "true" : "false") << std::endl;

    return 0;
}
