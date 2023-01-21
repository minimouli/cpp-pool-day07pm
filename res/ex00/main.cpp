/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "Skat.hpp"

int main() {

    Skat bob;
    Skat alice("Alice", 1);

    bob.status();
    alice.status();

    alice.useStimPaks();
    alice.useStimPaks();

    alice.addStimPaks(0);

    bob.shareStimPaks(3, alice.stimPaks());
    alice.status();

    bob.shareStimPaks(13, alice.stimPaks());
    bob.status();

    return 0;
}
