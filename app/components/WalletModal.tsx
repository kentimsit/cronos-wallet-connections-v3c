"use client";
import {
    Button,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalProps,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { WalletName } from "@web3-wallet/react";
import { useCallback, useEffect, useMemo } from "react";
import { currentWallet, walletConfigs } from "../wallets";
import { getAddChainParameters } from "../chains";
import { MetaMask } from "@web3-wallet/metamask";

const { connectAsCurrentWallet, autoConnect } = currentWallet;

export function WalletModal({ isOpen, onClose }: Omit<ModalProps, "children">) {
    const toast = useToast();

    const changeWallet = useCallback(
        async (newWalletName: WalletName) => {
            try {
                await connectAsCurrentWallet(
                    newWalletName,
                    getAddChainParameters(25),
                );
                onClose();
            } catch (e: unknown) {
                toast({
                    position: "top",
                    status: "error",
                    description:
                        (e as Error).message ?? "Failed to connect wallet",
                });
            }
        },
        [onClose, toast],
    );

    useEffect(() => {
        autoConnect();
    }, []);

    const walletButtons = useMemo(() => {
        return (
            <VStack spacing="10px">
                {walletConfigs.map(({ walletName, label, icon }) => (
                    <Button
                        key={walletName}
                        onClick={() => {
                            changeWallet(MetaMask.walletName);
                        }}
                        bg={"blue.100"}
                        color={"black"}
                        _hover={{
                            bg: "blue.300",
                        }}
                        width="250px"
                        leftIcon={
                            <Image
                                boxSize="20px"
                                src={icon}
                                alt={label ?? walletName}
                            />
                        }
                    >
                        {label ?? walletName}
                    </Button>
                ))}
            </VStack>
        );
    }, [changeWallet]);

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Wallet options</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={8}>{walletButtons}</ModalBody>
            </ModalContent>
        </Modal>
    );
}
