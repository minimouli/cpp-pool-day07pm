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

    k10.addCom(2, 2, 20);
    k10.addCom(3, 3, 30);
    k10.addCom(4, 4, 40);

    KreogCom *k40 = k10.getCom();
    KreogCom *k30 = k40->getCom();
    KreogCom *k20 = k30->getCom();

    k30->removeCom();
    k10.locateSquad();

    k10.addCom(5, 5, 50);
    KreogCom *k50 = k10.getCom();
    delete k50;

    k10.removeCom();
    k10.removeCom();

    k10.locateSquad();
    k10.removeCom();
    k10.locateSquad();

    return 0;
}
