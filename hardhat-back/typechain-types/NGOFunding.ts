/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace NGOFunding {
  export type DonationStruct = {
    donor: AddressLike;
    amount: BigNumberish;
    timestamp: BigNumberish;
  };

  export type DonationStructOutput = [
    donor: string,
    amount: bigint,
    timestamp: bigint
  ] & { donor: string; amount: bigint; timestamp: bigint };
}

export interface NGOFundingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "claimVoterReward"
      | "createTask"
      | "donate"
      | "getAllNGOs"
      | "getAllTasks"
      | "getDonations"
      | "getNGODetails"
      | "getNGOTaskStatuses"
      | "getNGOTotalFunds"
      | "getPendingTasks"
      | "getTaskDetails"
      | "getVoterDetails"
      | "hasVoted"
      | "ngoList"
      | "ngos"
      | "owner"
      | "registerNGO"
      | "registerVoter"
      | "resolveTask"
      | "taskCounter"
      | "taskDonations"
      | "tasks"
      | "vote"
      | "voters"
      | "withdrawVoterStake"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Donated"
      | "NGORegistered"
      | "TaskCreated"
      | "TaskResolved"
      | "Voted"
      | "VoterRegistered"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "claimVoterReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createTask",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "donate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllNGOs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllTasks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDonations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNGODetails",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNGOTaskStatuses",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNGOTotalFunds",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingTasks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTaskDetails",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVoterDetails",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasVoted",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ngoList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ngos", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerNGO",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerVoter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resolveTask",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "taskCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "taskDonations",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "tasks", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "voters", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "withdrawVoterStake",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "claimVoterReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "donate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAllNGOs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllTasks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDonations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNGODetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNGOTaskStatuses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNGOTotalFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingTasks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTaskDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVoterDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasVoted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ngoList", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ngos", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerNGO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerVoter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resolveTask",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taskCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taskDonations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tasks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voters", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawVoterStake",
    data: BytesLike
  ): Result;
}

export namespace DonatedEvent {
  export type InputTuple = [
    taskId: BigNumberish,
    donor: AddressLike,
    amount: BigNumberish,
    donationId: BigNumberish
  ];
  export type OutputTuple = [
    taskId: bigint,
    donor: string,
    amount: bigint,
    donationId: bigint
  ];
  export interface OutputObject {
    taskId: bigint;
    donor: string;
    amount: bigint;
    donationId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NGORegisteredEvent {
  export type InputTuple = [ngo: AddressLike, name: string];
  export type OutputTuple = [ngo: string, name: string];
  export interface OutputObject {
    ngo: string;
    name: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TaskCreatedEvent {
  export type InputTuple = [taskId: BigNumberish, ngo: AddressLike];
  export type OutputTuple = [taskId: bigint, ngo: string];
  export interface OutputObject {
    taskId: bigint;
    ngo: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TaskResolvedEvent {
  export type InputTuple = [taskId: BigNumberish, status: string];
  export type OutputTuple = [taskId: bigint, status: string];
  export interface OutputObject {
    taskId: bigint;
    status: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VotedEvent {
  export type InputTuple = [
    taskId: BigNumberish,
    voter: AddressLike,
    vote: boolean
  ];
  export type OutputTuple = [taskId: bigint, voter: string, vote: boolean];
  export interface OutputObject {
    taskId: bigint;
    voter: string;
    vote: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoterRegisteredEvent {
  export type InputTuple = [voter: AddressLike, stakedEth: BigNumberish];
  export type OutputTuple = [voter: string, stakedEth: bigint];
  export interface OutputObject {
    voter: string;
    stakedEth: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface NGOFunding extends BaseContract {
  connect(runner?: ContractRunner | null): NGOFunding;
  waitForDeployment(): Promise<this>;

  interface: NGOFundingInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  claimVoterReward: TypedContractMethod<
    [_taskId: BigNumberish],
    [void],
    "nonpayable"
  >;

  createTask: TypedContractMethod<
    [_proofLinks: string[]],
    [void],
    "nonpayable"
  >;

  donate: TypedContractMethod<[_taskId: BigNumberish], [void], "payable">;

  getAllNGOs: TypedContractMethod<[], [string[]], "view">;

  getAllTasks: TypedContractMethod<[], [bigint[]], "view">;

  getDonations: TypedContractMethod<
    [_taskId: BigNumberish],
    [NGOFunding.DonationStructOutput[]],
    "view"
  >;

  getNGODetails: TypedContractMethod<
    [_ngo: AddressLike],
    [
      [string, string, bigint, bigint[]] & {
        name: string;
        description: string;
        stakedEth: bigint;
        taskIds: bigint[];
      }
    ],
    "view"
  >;

  getNGOTaskStatuses: TypedContractMethod<
    [_ngo: AddressLike],
    [[bigint[], string[]] & { taskIds: bigint[]; statuses: string[] }],
    "view"
  >;

  getNGOTotalFunds: TypedContractMethod<[_ngo: AddressLike], [bigint], "view">;

  getPendingTasks: TypedContractMethod<[], [bigint[]], "view">;

  getTaskDetails: TypedContractMethod<
    [_taskId: BigNumberish],
    [
      [string, string[], string, bigint, bigint, bigint, bigint, bigint] & {
        ngo: string;
        proofLinks: string[];
        status: string;
        yesVotes: bigint;
        noVotes: bigint;
        totalFunds: bigint;
        startTime: bigint;
        voterCount: bigint;
      }
    ],
    "view"
  >;

  getVoterDetails: TypedContractMethod<[_voter: AddressLike], [bigint], "view">;

  hasVoted: TypedContractMethod<
    [_voter: AddressLike, _taskId: BigNumberish],
    [boolean],
    "view"
  >;

  ngoList: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  ngos: TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, string, bigint] & {
        name: string;
        description: string;
        stakedEth: bigint;
      }
    ],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  registerNGO: TypedContractMethod<
    [_name: string, _description: string],
    [void],
    "payable"
  >;

  registerVoter: TypedContractMethod<[], [void], "payable">;

  resolveTask: TypedContractMethod<
    [_taskId: BigNumberish],
    [void],
    "nonpayable"
  >;

  taskCounter: TypedContractMethod<[], [bigint], "view">;

  taskDonations: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [
      [string, bigint, bigint] & {
        donor: string;
        amount: bigint;
        timestamp: bigint;
      }
    ],
    "view"
  >;

  tasks: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, bigint, bigint, bigint] & {
        ngo: string;
        status: string;
        yesVotes: bigint;
        noVotes: bigint;
        totalFunds: bigint;
        startTime: bigint;
        voterCount: bigint;
      }
    ],
    "view"
  >;

  vote: TypedContractMethod<
    [_taskId: BigNumberish, _approve: boolean],
    [void],
    "nonpayable"
  >;

  voters: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  withdrawVoterStake: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "claimVoterReward"
  ): TypedContractMethod<[_taskId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "createTask"
  ): TypedContractMethod<[_proofLinks: string[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "donate"
  ): TypedContractMethod<[_taskId: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "getAllNGOs"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getAllTasks"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getDonations"
  ): TypedContractMethod<
    [_taskId: BigNumberish],
    [NGOFunding.DonationStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getNGODetails"
  ): TypedContractMethod<
    [_ngo: AddressLike],
    [
      [string, string, bigint, bigint[]] & {
        name: string;
        description: string;
        stakedEth: bigint;
        taskIds: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getNGOTaskStatuses"
  ): TypedContractMethod<
    [_ngo: AddressLike],
    [[bigint[], string[]] & { taskIds: bigint[]; statuses: string[] }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getNGOTotalFunds"
  ): TypedContractMethod<[_ngo: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getPendingTasks"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getTaskDetails"
  ): TypedContractMethod<
    [_taskId: BigNumberish],
    [
      [string, string[], string, bigint, bigint, bigint, bigint, bigint] & {
        ngo: string;
        proofLinks: string[];
        status: string;
        yesVotes: bigint;
        noVotes: bigint;
        totalFunds: bigint;
        startTime: bigint;
        voterCount: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVoterDetails"
  ): TypedContractMethod<[_voter: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "hasVoted"
  ): TypedContractMethod<
    [_voter: AddressLike, _taskId: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "ngoList"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "ngos"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, string, bigint] & {
        name: string;
        description: string;
        stakedEth: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registerNGO"
  ): TypedContractMethod<
    [_name: string, _description: string],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "registerVoter"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "resolveTask"
  ): TypedContractMethod<[_taskId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "taskCounter"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "taskDonations"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [
      [string, bigint, bigint] & {
        donor: string;
        amount: bigint;
        timestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "tasks"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, bigint, bigint, bigint] & {
        ngo: string;
        status: string;
        yesVotes: bigint;
        noVotes: bigint;
        totalFunds: bigint;
        startTime: bigint;
        voterCount: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<
    [_taskId: BigNumberish, _approve: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "voters"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdrawVoterStake"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "Donated"
  ): TypedContractEvent<
    DonatedEvent.InputTuple,
    DonatedEvent.OutputTuple,
    DonatedEvent.OutputObject
  >;
  getEvent(
    key: "NGORegistered"
  ): TypedContractEvent<
    NGORegisteredEvent.InputTuple,
    NGORegisteredEvent.OutputTuple,
    NGORegisteredEvent.OutputObject
  >;
  getEvent(
    key: "TaskCreated"
  ): TypedContractEvent<
    TaskCreatedEvent.InputTuple,
    TaskCreatedEvent.OutputTuple,
    TaskCreatedEvent.OutputObject
  >;
  getEvent(
    key: "TaskResolved"
  ): TypedContractEvent<
    TaskResolvedEvent.InputTuple,
    TaskResolvedEvent.OutputTuple,
    TaskResolvedEvent.OutputObject
  >;
  getEvent(
    key: "Voted"
  ): TypedContractEvent<
    VotedEvent.InputTuple,
    VotedEvent.OutputTuple,
    VotedEvent.OutputObject
  >;
  getEvent(
    key: "VoterRegistered"
  ): TypedContractEvent<
    VoterRegisteredEvent.InputTuple,
    VoterRegisteredEvent.OutputTuple,
    VoterRegisteredEvent.OutputObject
  >;

  filters: {
    "Donated(uint256,address,uint256,uint256)": TypedContractEvent<
      DonatedEvent.InputTuple,
      DonatedEvent.OutputTuple,
      DonatedEvent.OutputObject
    >;
    Donated: TypedContractEvent<
      DonatedEvent.InputTuple,
      DonatedEvent.OutputTuple,
      DonatedEvent.OutputObject
    >;

    "NGORegistered(address,string)": TypedContractEvent<
      NGORegisteredEvent.InputTuple,
      NGORegisteredEvent.OutputTuple,
      NGORegisteredEvent.OutputObject
    >;
    NGORegistered: TypedContractEvent<
      NGORegisteredEvent.InputTuple,
      NGORegisteredEvent.OutputTuple,
      NGORegisteredEvent.OutputObject
    >;

    "TaskCreated(uint256,address)": TypedContractEvent<
      TaskCreatedEvent.InputTuple,
      TaskCreatedEvent.OutputTuple,
      TaskCreatedEvent.OutputObject
    >;
    TaskCreated: TypedContractEvent<
      TaskCreatedEvent.InputTuple,
      TaskCreatedEvent.OutputTuple,
      TaskCreatedEvent.OutputObject
    >;

    "TaskResolved(uint256,string)": TypedContractEvent<
      TaskResolvedEvent.InputTuple,
      TaskResolvedEvent.OutputTuple,
      TaskResolvedEvent.OutputObject
    >;
    TaskResolved: TypedContractEvent<
      TaskResolvedEvent.InputTuple,
      TaskResolvedEvent.OutputTuple,
      TaskResolvedEvent.OutputObject
    >;

    "Voted(uint256,address,bool)": TypedContractEvent<
      VotedEvent.InputTuple,
      VotedEvent.OutputTuple,
      VotedEvent.OutputObject
    >;
    Voted: TypedContractEvent<
      VotedEvent.InputTuple,
      VotedEvent.OutputTuple,
      VotedEvent.OutputObject
    >;

    "VoterRegistered(address,uint256)": TypedContractEvent<
      VoterRegisteredEvent.InputTuple,
      VoterRegisteredEvent.OutputTuple,
      VoterRegisteredEvent.OutputObject
    >;
    VoterRegistered: TypedContractEvent<
      VoterRegisteredEvent.InputTuple,
      VoterRegisteredEvent.OutputTuple,
      VoterRegisteredEvent.OutputObject
    >;
  };
}
