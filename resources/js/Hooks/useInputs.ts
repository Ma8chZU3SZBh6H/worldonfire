function useInputs<T>(e: React.FormEvent) {
    return e.target as typeof e.target & T;
}

export default useInputs;
