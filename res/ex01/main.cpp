/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <iostream>
#include "KoalaBot.hpp"
#include "Parts.hpp"

int main() {

    KoalaBot bob("Bob the bot");
    KoalaBot sofia("Sofia the bot");
    KoalaBot ali("Ali the bot");

    Arms a02("A-02");
    Arms a03("A-03", false);

    Legs l02("L-02");
    Legs l03("L-03", false);

    Head h02("H-02");
    Head h03("H-03", false);

    bob.setParts(a02);
    sofia.setParts(a03);

    sofia.setParts(l02);
    ali.setParts(l03);

    bob.setParts(h02);
    ali.setParts(h03);

    bob.informations();
    std::cout << "Is Bob okay? " << (bob.status() ? "true" : "false") << std::endl;

    sofia.informations();
    std::cout << "Is Sofia okay? " << (sofia.status() ? "true" : "false") << std::endl;

    ali.informations();
    std::cout << "Is Ali okay? " << (ali.status() ? "true" : "false") << std::endl;

    std::cout << "swapping..." << std::endl;

    bob.swapParts(a03);
    sofia.swapParts(a03);

    sofia.swapParts(l03);
    ali.swapParts(l03);

    bob.swapParts(h03);
    ali.swapParts(h03);

    bob.informations();
    std::cout << "Is Bob okay? " << (bob.status() ? "true" : "false") << std::endl;

    sofia.informations();
    std::cout << "Is Sofia okay? " << (sofia.status() ? "true" : "false") << std::endl;

    ali.informations();
    std::cout << "Is Ali okay? " << (ali.status() ? "true" : "false") << std::endl;

    return 0;
}
