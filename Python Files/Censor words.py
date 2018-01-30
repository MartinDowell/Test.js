def censor(text,word):
    s = text.split()
    c = ''
    for i in range(len(word)):
        c = c + '*'

    for i in range(len(s)):
        if s[i] == word:
            s[i] = c
        else:
            continue
    print (' '.join(s))

text = input('Enter a sentence:')
word = input('Censor a word:')
censor(text,word)
