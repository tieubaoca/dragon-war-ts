/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { InstantiateMsg, ExecuteMsg, Binary, Expiration, Timestamp, Uint64, ExecuteDragonCoreMsg, Action, Metadata, QueryMsg, AllNftInfoResponseForEmpty, OwnerOfResponse, Approval, NftInfoResponseForEmpty, Empty, OperatorResponse, TokensResponse, ApprovalResponse, ApprovalsResponse, Boolean, ContractInfoResponse, MinterResponse, Addr, MintersResponse, NumTokensResponse } from "./DragonCore.types";
import { DragonCoreQueryClient, DragonCoreClient } from "./DragonCore.client";
export const dragonCoreQueryKeys = {
  contract: ([{
    contract: "dragonCore"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...dragonCoreQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  minters: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "minters",
    args
  }] as const),
  canMateWith: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "can_mate_with",
    args
  }] as const),
  isReadyToMate: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "is_ready_to_mate",
    args
  }] as const),
  isPregnant: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "is_pregnant",
    args
  }] as const),
  ownerOf: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "owner_of",
    args
  }] as const),
  approval: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "approval",
    args
  }] as const),
  approvals: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "approvals",
    args
  }] as const),
  allOperators: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "all_operators",
    args
  }] as const),
  numTokens: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "num_tokens",
    args
  }] as const),
  contractInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "contract_info",
    args
  }] as const),
  nftInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "nft_info",
    args
  }] as const),
  allNftInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "all_nft_info",
    args
  }] as const),
  tokens: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "tokens",
    args
  }] as const),
  allTokens: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "all_tokens",
    args
  }] as const),
  minter: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...dragonCoreQueryKeys.address(contractAddress)[0],
    method: "minter",
    args
  }] as const)
};
export const dragonCoreQueries = {
  minters: <TData = MintersResponse,>({
    client,
    options
  }: DragonCoreMintersQuery<TData>): UseQueryOptions<MintersResponse, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.minters(client?.contractAddress),
    queryFn: () => client ? client.minters() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  canMateWith: <TData = Boolean,>({
    client,
    args,
    options
  }: DragonCoreCanMateWithQuery<TData>): UseQueryOptions<Boolean, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.canMateWith(client?.contractAddress, args),
    queryFn: () => client ? client.canMateWith({
      matronId: args.matronId,
      sireId: args.sireId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  isReadyToMate: <TData = Boolean,>({
    client,
    args,
    options
  }: DragonCoreIsReadyToMateQuery<TData>): UseQueryOptions<Boolean, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.isReadyToMate(client?.contractAddress, args),
    queryFn: () => client ? client.isReadyToMate({
      tokenId: args.tokenId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  isPregnant: <TData = Boolean,>({
    client,
    args,
    options
  }: DragonCoreIsPregnantQuery<TData>): UseQueryOptions<Boolean, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.isPregnant(client?.contractAddress, args),
    queryFn: () => client ? client.isPregnant({
      tokenId: args.tokenId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  ownerOf: <TData = OwnerOfResponse,>({
    client,
    args,
    options
  }: DragonCoreOwnerOfQuery<TData>): UseQueryOptions<OwnerOfResponse, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.ownerOf(client?.contractAddress, args),
    queryFn: () => client ? client.ownerOf({
      includeExpired: args.includeExpired,
      tokenId: args.tokenId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  approval: <TData = ApprovalResponse,>({
    client,
    args,
    options
  }: DragonCoreApprovalQuery<TData>): UseQueryOptions<ApprovalResponse, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.approval(client?.contractAddress, args),
    queryFn: () => client ? client.approval({
      includeExpired: args.includeExpired,
      spender: args.spender,
      tokenId: args.tokenId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  approvals: <TData = ApprovalsResponse,>({
    client,
    args,
    options
  }: DragonCoreApprovalsQuery<TData>): UseQueryOptions<ApprovalsResponse, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.approvals(client?.contractAddress, args),
    queryFn: () => client ? client.approvals({
      includeExpired: args.includeExpired,
      tokenId: args.tokenId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  allOperators: <TData = OperatorResponse,>({
    client,
    args,
    options
  }: DragonCoreAllOperatorsQuery<TData>): UseQueryOptions<OperatorResponse, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.allOperators(client?.contractAddress, args),
    queryFn: () => client ? client.allOperators({
      includeExpired: args.includeExpired,
      limit: args.limit,
      owner: args.owner,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  numTokens: <TData = NumTokensResponse,>({
    client,
    options
  }: DragonCoreNumTokensQuery<TData>): UseQueryOptions<NumTokensResponse, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.numTokens(client?.contractAddress),
    queryFn: () => client ? client.numTokens() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  contractInfo: <TData = ContractInfoResponse,>({
    client,
    options
  }: DragonCoreContractInfoQuery<TData>): UseQueryOptions<ContractInfoResponse, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.contractInfo(client?.contractAddress),
    queryFn: () => client ? client.contractInfo() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  nftInfo: <TData = NftInfoResponseForEmpty,>({
    client,
    args,
    options
  }: DragonCoreNftInfoQuery<TData>): UseQueryOptions<NftInfoResponseForEmpty, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.nftInfo(client?.contractAddress, args),
    queryFn: () => client ? client.nftInfo({
      tokenId: args.tokenId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  allNftInfo: <TData = AllNftInfoResponseForEmpty,>({
    client,
    args,
    options
  }: DragonCoreAllNftInfoQuery<TData>): UseQueryOptions<AllNftInfoResponseForEmpty, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.allNftInfo(client?.contractAddress, args),
    queryFn: () => client ? client.allNftInfo({
      includeExpired: args.includeExpired,
      tokenId: args.tokenId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  tokens: <TData = TokensResponse,>({
    client,
    args,
    options
  }: DragonCoreTokensQuery<TData>): UseQueryOptions<TokensResponse, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.tokens(client?.contractAddress, args),
    queryFn: () => client ? client.tokens({
      limit: args.limit,
      owner: args.owner,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  allTokens: <TData = TokensResponse,>({
    client,
    args,
    options
  }: DragonCoreAllTokensQuery<TData>): UseQueryOptions<TokensResponse, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.allTokens(client?.contractAddress, args),
    queryFn: () => client ? client.allTokens({
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  minter: <TData = MinterResponse,>({
    client,
    options
  }: DragonCoreMinterQuery<TData>): UseQueryOptions<MinterResponse, Error, TData> => ({
    queryKey: dragonCoreQueryKeys.minter(client?.contractAddress),
    queryFn: () => client ? client.minter() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface DragonCoreReactQuery<TResponse, TData = TResponse> {
  client: DragonCoreQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface DragonCoreMinterQuery<TData> extends DragonCoreReactQuery<MinterResponse, TData> {}
export function useDragonCoreMinterQuery<TData = MinterResponse>({
  client,
  options
}: DragonCoreMinterQuery<TData>) {
  return useQuery<MinterResponse, Error, TData>(dragonCoreQueryKeys.minter(client?.contractAddress), () => client ? client.minter() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreAllTokensQuery<TData> extends DragonCoreReactQuery<TokensResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useDragonCoreAllTokensQuery<TData = TokensResponse>({
  client,
  args,
  options
}: DragonCoreAllTokensQuery<TData>) {
  return useQuery<TokensResponse, Error, TData>(dragonCoreQueryKeys.allTokens(client?.contractAddress, args), () => client ? client.allTokens({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreTokensQuery<TData> extends DragonCoreReactQuery<TokensResponse, TData> {
  args: {
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function useDragonCoreTokensQuery<TData = TokensResponse>({
  client,
  args,
  options
}: DragonCoreTokensQuery<TData>) {
  return useQuery<TokensResponse, Error, TData>(dragonCoreQueryKeys.tokens(client?.contractAddress, args), () => client ? client.tokens({
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreAllNftInfoQuery<TData> extends DragonCoreReactQuery<AllNftInfoResponseForEmpty, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function useDragonCoreAllNftInfoQuery<TData = AllNftInfoResponseForEmpty>({
  client,
  args,
  options
}: DragonCoreAllNftInfoQuery<TData>) {
  return useQuery<AllNftInfoResponseForEmpty, Error, TData>(dragonCoreQueryKeys.allNftInfo(client?.contractAddress, args), () => client ? client.allNftInfo({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreNftInfoQuery<TData> extends DragonCoreReactQuery<NftInfoResponseForEmpty, TData> {
  args: {
    tokenId: string;
  };
}
export function useDragonCoreNftInfoQuery<TData = NftInfoResponseForEmpty>({
  client,
  args,
  options
}: DragonCoreNftInfoQuery<TData>) {
  return useQuery<NftInfoResponseForEmpty, Error, TData>(dragonCoreQueryKeys.nftInfo(client?.contractAddress, args), () => client ? client.nftInfo({
    tokenId: args.tokenId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreContractInfoQuery<TData> extends DragonCoreReactQuery<ContractInfoResponse, TData> {}
export function useDragonCoreContractInfoQuery<TData = ContractInfoResponse>({
  client,
  options
}: DragonCoreContractInfoQuery<TData>) {
  return useQuery<ContractInfoResponse, Error, TData>(dragonCoreQueryKeys.contractInfo(client?.contractAddress), () => client ? client.contractInfo() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreNumTokensQuery<TData> extends DragonCoreReactQuery<NumTokensResponse, TData> {}
export function useDragonCoreNumTokensQuery<TData = NumTokensResponse>({
  client,
  options
}: DragonCoreNumTokensQuery<TData>) {
  return useQuery<NumTokensResponse, Error, TData>(dragonCoreQueryKeys.numTokens(client?.contractAddress), () => client ? client.numTokens() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreAllOperatorsQuery<TData> extends DragonCoreReactQuery<OperatorResponse, TData> {
  args: {
    includeExpired?: boolean;
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function useDragonCoreAllOperatorsQuery<TData = OperatorResponse>({
  client,
  args,
  options
}: DragonCoreAllOperatorsQuery<TData>) {
  return useQuery<OperatorResponse, Error, TData>(dragonCoreQueryKeys.allOperators(client?.contractAddress, args), () => client ? client.allOperators({
    includeExpired: args.includeExpired,
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreApprovalsQuery<TData> extends DragonCoreReactQuery<ApprovalsResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function useDragonCoreApprovalsQuery<TData = ApprovalsResponse>({
  client,
  args,
  options
}: DragonCoreApprovalsQuery<TData>) {
  return useQuery<ApprovalsResponse, Error, TData>(dragonCoreQueryKeys.approvals(client?.contractAddress, args), () => client ? client.approvals({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreApprovalQuery<TData> extends DragonCoreReactQuery<ApprovalResponse, TData> {
  args: {
    includeExpired?: boolean;
    spender: string;
    tokenId: string;
  };
}
export function useDragonCoreApprovalQuery<TData = ApprovalResponse>({
  client,
  args,
  options
}: DragonCoreApprovalQuery<TData>) {
  return useQuery<ApprovalResponse, Error, TData>(dragonCoreQueryKeys.approval(client?.contractAddress, args), () => client ? client.approval({
    includeExpired: args.includeExpired,
    spender: args.spender,
    tokenId: args.tokenId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreOwnerOfQuery<TData> extends DragonCoreReactQuery<OwnerOfResponse, TData> {
  args: {
    includeExpired?: boolean;
    tokenId: string;
  };
}
export function useDragonCoreOwnerOfQuery<TData = OwnerOfResponse>({
  client,
  args,
  options
}: DragonCoreOwnerOfQuery<TData>) {
  return useQuery<OwnerOfResponse, Error, TData>(dragonCoreQueryKeys.ownerOf(client?.contractAddress, args), () => client ? client.ownerOf({
    includeExpired: args.includeExpired,
    tokenId: args.tokenId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreIsPregnantQuery<TData> extends DragonCoreReactQuery<Boolean, TData> {
  args: {
    tokenId: string;
  };
}
export function useDragonCoreIsPregnantQuery<TData = Boolean>({
  client,
  args,
  options
}: DragonCoreIsPregnantQuery<TData>) {
  return useQuery<Boolean, Error, TData>(dragonCoreQueryKeys.isPregnant(client?.contractAddress, args), () => client ? client.isPregnant({
    tokenId: args.tokenId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreIsReadyToMateQuery<TData> extends DragonCoreReactQuery<Boolean, TData> {
  args: {
    tokenId: string;
  };
}
export function useDragonCoreIsReadyToMateQuery<TData = Boolean>({
  client,
  args,
  options
}: DragonCoreIsReadyToMateQuery<TData>) {
  return useQuery<Boolean, Error, TData>(dragonCoreQueryKeys.isReadyToMate(client?.contractAddress, args), () => client ? client.isReadyToMate({
    tokenId: args.tokenId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreCanMateWithQuery<TData> extends DragonCoreReactQuery<Boolean, TData> {
  args: {
    matronId: string;
    sireId: string;
  };
}
export function useDragonCoreCanMateWithQuery<TData = Boolean>({
  client,
  args,
  options
}: DragonCoreCanMateWithQuery<TData>) {
  return useQuery<Boolean, Error, TData>(dragonCoreQueryKeys.canMateWith(client?.contractAddress, args), () => client ? client.canMateWith({
    matronId: args.matronId,
    sireId: args.sireId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreMintersQuery<TData> extends DragonCoreReactQuery<MintersResponse, TData> {}
export function useDragonCoreMintersQuery<TData = MintersResponse>({
  client,
  options
}: DragonCoreMintersQuery<TData>) {
  return useQuery<MintersResponse, Error, TData>(dragonCoreQueryKeys.minters(client?.contractAddress), () => client ? client.minters() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DragonCoreUpdateOwnershipMutation {
  client: DragonCoreClient;
  msg: Action;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDragonCoreUpdateOwnershipMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DragonCoreUpdateOwnershipMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DragonCoreUpdateOwnershipMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateOwnership(msg, fee, memo, funds), options);
}
export interface DragonCoreExtensionMutation {
  client: DragonCoreClient;
  msg: {
    msg: ExecuteDragonCoreMsg;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDragonCoreExtensionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DragonCoreExtensionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DragonCoreExtensionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.extension(msg, fee, memo, funds), options);
}
export interface DragonCoreBurnMutation {
  client: DragonCoreClient;
  msg: {
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDragonCoreBurnMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DragonCoreBurnMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DragonCoreBurnMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.burn(msg, fee, memo, funds), options);
}
export interface DragonCoreMintMutation {
  client: DragonCoreClient;
  msg: {
    extension: Metadata;
    owner: string;
    tokenId: string;
    tokenUri?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDragonCoreMintMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DragonCoreMintMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DragonCoreMintMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.mint(msg, fee, memo, funds), options);
}
export interface DragonCoreRevokeAllMutation {
  client: DragonCoreClient;
  msg: {
    operator: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDragonCoreRevokeAllMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DragonCoreRevokeAllMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DragonCoreRevokeAllMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.revokeAll(msg, fee, memo, funds), options);
}
export interface DragonCoreApproveAllMutation {
  client: DragonCoreClient;
  msg: {
    expires?: Expiration;
    operator: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDragonCoreApproveAllMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DragonCoreApproveAllMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DragonCoreApproveAllMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.approveAll(msg, fee, memo, funds), options);
}
export interface DragonCoreRevokeMutation {
  client: DragonCoreClient;
  msg: {
    spender: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDragonCoreRevokeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DragonCoreRevokeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DragonCoreRevokeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.revoke(msg, fee, memo, funds), options);
}
export interface DragonCoreApproveMutation {
  client: DragonCoreClient;
  msg: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDragonCoreApproveMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DragonCoreApproveMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DragonCoreApproveMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.approve(msg, fee, memo, funds), options);
}
export interface DragonCoreSendNftMutation {
  client: DragonCoreClient;
  msg: {
    contract: string;
    msg: Binary;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDragonCoreSendNftMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DragonCoreSendNftMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DragonCoreSendNftMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.sendNft(msg, fee, memo, funds), options);
}
export interface DragonCoreTransferNftMutation {
  client: DragonCoreClient;
  msg: {
    recipient: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDragonCoreTransferNftMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DragonCoreTransferNftMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DragonCoreTransferNftMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.transferNft(msg, fee, memo, funds), options);
}