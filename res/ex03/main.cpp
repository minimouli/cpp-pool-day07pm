/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <iostream>
#include "Phaser.hpp"
#include "Sounds.hpp"

Sounds::Sounds() {}

const std::string Sounds::Regular = "Booooooom";
const std::string Sounds::Plasma = "Fwoooosh";
const std::string Sounds::Rocket = "Never used";

int main() {

    Phaser phaser(5, Phaser::REGULAR);

    phaser.addAmmo(Phaser::REGULAR);
    phaser.fire();
    phaser.addAmmo(Phaser::PLASMA);

    std::cout << "Firing all ammunition" << std::endl;
    while (phaser.getCurrentAmmos() > 0)
        phaser.fire();

    phaser.changeType(Phaser::REGULAR);
    phaser.changeType(Phaser::PLASMA);
    phaser.reload();
    phaser.ejectClip();
    phaser.fire();
    phaser.reload();

    std::cout << "Firing all ammunition" << std::endl;
    while (phaser.getCurrentAmmos() > 0)
        phaser.fire();

    return 0;
}
