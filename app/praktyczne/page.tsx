'use client'

import { SetStateAction, useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Input } from '../../components/ui/input'
import { Button } from '@/components/ui/button'
import { exams } from './arkusze'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'
import { FileDown, FileText } from 'lucide-react'


export default function PracticalExamsList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [yearFilter, setYearFilter] = useState<string>('all')
  const [sessionFilter, setSessionFilter] = useState<string>('all')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')
  const [visibleExams, setVisibleExams] = useState(6)

  const filteredAndSortedExams = exams
    .filter((exam) =>
      exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((exam) => yearFilter === 'all' || exam.year.toString() === yearFilter)
    .filter((exam) => sessionFilter === 'all' || exam.session === sessionFilter)
    .filter((exam) => categoryFilter === 'all' || exam.category === categoryFilter)
    .sort((a, b) => sortOrder === 'newest' ? b.year - a.year : a.year - b.year)
  const displayedExams = filteredAndSortedExams.slice(0, visibleExams)
  const hasMoreExams = visibleExams < filteredAndSortedExams.length

  const loadMoreExams = () => {
    setVisibleExams((prevVisible) => Math.min(prevVisible + 6, filteredAndSortedExams.length))
  }
  return (
    <div>
         <Navbar/>
      <div className="mb-6 flex mt-12 px-8 flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <Input
          placeholder="Szukaj egzaminów..."
          value={searchTerm}
          onChange={(e: { target: { value: SetStateAction<string> } }) => setSearchTerm(e.target.value)}
          className="md:w-1/3"
        />
        <Select onValueChange={setYearFilter}>
          <SelectTrigger className="md:w-1/6">
            <SelectValue placeholder="Rok" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Wszystkie lata</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
            <SelectItem value="2020">2020</SelectItem>
            <SelectItem value="2019">2019</SelectItem>
            <SelectItem value="2018">2018</SelectItem>
            {/* Add more years as needed */}
          </SelectContent>
        </Select>
        <Select onValueChange={setSessionFilter}>
          <SelectTrigger className="md:w-1/6">
            <SelectValue placeholder="Sesja" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Wszystkie sesje</SelectItem>
            <SelectItem value="Winter">Zima</SelectItem>
            <SelectItem value="Summer">Lato</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setCategoryFilter}>
          <SelectTrigger className="md:w-1/6">
            <SelectValue placeholder="Kategoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Wszystkie kategorie</SelectItem>
            <SelectItem value="INF 02">INF 02</SelectItem>
            <SelectItem value="INF 03">INF 03</SelectItem>
            <SelectItem value="EE 0.8">EE 0.8 (Stara Formuła)</SelectItem>
            <SelectItem value="EE 0.9">EE 0.9 (Stara Formuła)</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value: string) => setSortOrder(value as 'newest' | 'oldest')}>
          <SelectTrigger className="md:w-1/6">
            <SelectValue placeholder="Sortuj" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Najnowsze</SelectItem>
            <SelectItem value="oldest">Najstarsze</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4 px-8 mb-8">
      {displayedExams.map((exam) => (
          <div key={exam.id} className="flex items-center space-x-4 bg-black border border-[#0a0a0a] p-4 rounded-lg">
            <FileText className="h-8 w-8 text-white" />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{exam.title}</h3>
              <p className="text-gray-400">{exam.description}</p>
            </div>
            <Button asChild variant="outline">
              <a href={exam.downloadUrl} download>
                <FileDown className="mr-2 h-4 w-4" /> Pobierz
              </a>
            </Button>
          </div>
        ))}
              {hasMoreExams && (
        <div className="mt-8 flex justify-center">
          <Button onClick={loadMoreExams} variant="secondary">
            Załaduj więcej
          </Button>
        </div>
      )}
      </div>
    </div>
  )
}

